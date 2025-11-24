import React, { useState, useEffect } from 'react';
import './CurrencyWidget.css';

const CurrencyWidget: React.FC = () => {
  // CAMBIO 1: El estado ahora permite 'string' (para dejarlo vacío) o 'number'
  const [amount, setAmount] = useState<number | string>(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('COP');
  const [lastUpdated, setLastUpdated] = useState<string>('Cargando...');
  
  const [rates, setRates] = useState<Record<string, number>>({
    USD: 0, 
    EUR: 0,
    COP: 1
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-COP,EUR-COP');
        const data = await response.json();

        const usdPrice = parseFloat(data.USDCOP.bid);
        const eurPrice = parseFloat(data.EURCOP.bid);

        setRates({
          USD: usdPrice,
          EUR: eurPrice,
          COP: 1
        });

        const date = new Date();
        setLastUpdated(date.toLocaleString('es-CO', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }));

      } catch (error) {
        console.error("Error conectando con API de mercado:", error);
        setLastUpdated("Error de conexión");
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000);
    return () => clearInterval(interval);
  }, []);


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      setAmount('');
      return;
    }

    const numValue = parseFloat(value);
    if (numValue >= 0) {
      setAmount(numValue); // Solo actualizamos si es positivo
    }
  };

  const convert = () => {
    if (amount === '' || amount === 0) return "0"; 

    const numericAmount = Number(amount);
    
    if (rates.USD === 0) return "---";

    let result = 0;
    
    if (fromCurrency === toCurrency) {
        result = numericAmount;
    } else if (fromCurrency === 'COP') {
        result = numericAmount / rates[toCurrency];
    } else if (toCurrency === 'COP') {
        result = numericAmount * rates[fromCurrency];
    } else {
        const amountInCop = numericAmount * rates[fromCurrency];
        result = amountInCop / rates[toCurrency];
    }
    
    return result.toLocaleString('es-CO', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
    });
  };

  const formatRate = (value: number) => {
      return value.toLocaleString('es-CO', { maximumFractionDigits: 2 });
  };

  return (
    <div className="currency-widget rounded-2xl overflow-hidden w-full max-w-md mx-auto backdrop-blur-xl bg-white/90 border border-white/50 shadow-2xl">
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-5 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 pattern-grid-lg opacity-20"></div>
        <h3 className="font-bold text-xl relative z-10">Conversor y T.R.M</h3>
        <div className="flex justify-center items-center gap-2 mt-1 text-cyan-300 text-xs font-bold uppercase tracking-wider relative z-10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Mercado en Tiempo Real
        </div>
      </div>
      
      <div className="p-6 space-y-5">
        {rates.USD > 0 && (
            <div className="flex justify-between items-center text-slate-600 text-xs font-bold bg-slate-100 p-2 rounded-lg transition-all animate-fade-in">
                <div className="flex items-center gap-1">
                    <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-4 h-auto rounded-sm shadow-sm"/>
                    <span>1 USD = ${formatRate(rates.USD)}</span>
                </div>
                <div className="flex items-center gap-1">
                    <img src="https://flagcdn.com/w20/eu.png" alt="EU" className="w-4 h-auto rounded-sm shadow-sm"/>
                    <span>1 EUR = ${formatRate(rates.EUR)}</span>
                </div>
            </div>
        )}

        <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Monto a convertir</label>
            <div className="relative group">
                <input 
                    type="number" 
                    value={amount} 
                    onChange={handleAmountChange}
                    className="currency-input w-full p-3 pl-4 rounded-xl text-slate-800 font-bold text-xl shadow-sm outline-none border border-transparent focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    min="0" 
                    placeholder="Ingrese valor"
                />
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">De</label>
                <div className="relative">
                    <select 
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="currency-input w-full p-3 rounded-xl text-slate-800 font-medium appearance-none outline-none border border-transparent focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                    >
                        <option value="USD">USD - Dólar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="COP">COP - Peso</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">A</label>
                <div className="relative">
                    <select 
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="currency-input w-full p-3 rounded-xl text-slate-800 font-medium appearance-none outline-none border border-transparent focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                    >
                        <option value="COP">COP - Peso</option>
                        <option value="USD">USD - Dólar</option>
                        <option value="EUR">EUR - Euro</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-xl text-center mt-4 transition-all duration-300 hover:shadow-md">
            <span className="block text-xs text-slate-500 mb-1 uppercase font-semibold">Resultado Estimado</span>
            <span className="block text-3xl font-black text-blue-900 tracking-tight">
                {convert()} <span className="text-lg text-slate-400 font-bold">{toCurrency}</span>
            </span>
        </div>
        
        <div className="text-center">
            <p className="text-[10px] text-slate-400">
                *Datos de mercado. Actualizado: <span className="capitalize">{lastUpdated}</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyWidget;

