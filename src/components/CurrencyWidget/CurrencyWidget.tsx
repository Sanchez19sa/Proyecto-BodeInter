import React, { useState, useEffect } from 'react';
import './CurrencyWidget.css';

const CurrencyWidget: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('COP');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    setLastUpdated(date.toLocaleString('es-CO', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }));
  }, []);

  // Mock Rates (Static for demo purposes)
  const rates: Record<string, number> = {
    USD: 4150,
    EUR: 4520,
    COP: 1
  };

  const convert = () => {
    const baseInCop = amount * rates[fromCurrency];
    const result = baseInCop / rates[toCurrency];
    return result.toLocaleString('es-CO', { maximumFractionDigits: 2 });
  };

  return (
    <div className="currency-widget rounded-2xl overflow-hidden w-full max-w-md mx-auto backdrop-blur-xl bg-white/90 border border-white/50 shadow-2xl">
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-5 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 pattern-grid-lg opacity-20"></div>
        <h3 className="font-bold text-xl relative z-10">Conversor y T.R.M</h3>
        <div className="flex justify-center items-center gap-2 mt-1 text-cyan-300 text-xs font-bold uppercase tracking-wider relative z-10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Tasas Referenciales
        </div>
      </div>
      
      <div className="p-6 space-y-5">
        <div className="flex justify-between items-center text-slate-600 text-xs font-bold bg-slate-100 p-2 rounded-lg">
             <div className="flex items-center gap-1">
                <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-4 h-auto rounded-sm"/>
                <span>1 USD = ${rates['USD']}</span>
             </div>
             <div className="flex items-center gap-1">
                <img src="https://flagcdn.com/w20/eu.png" alt="EU" className="w-4 h-auto rounded-sm"/>
                <span>1 EUR = ${rates['EUR']}</span>
             </div>
        </div>

        <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Monto a convertir</label>
            <div className="relative">
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="currency-input w-full p-3 pl-4 rounded-xl text-slate-800 font-bold text-xl shadow-sm"
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
                        className="currency-input w-full p-3 rounded-xl text-slate-800 font-medium appearance-none"
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
                        className="currency-input w-full p-3 rounded-xl text-slate-800 font-medium appearance-none"
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

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-xl text-center mt-4 relative overflow-hidden">
            <span className="block text-xs text-slate-500 mb-1 uppercase font-semibold">Resultado Estimado</span>
            <span className="block text-3xl font-black text-blue-900 tracking-tight">
                {convert()} <span className="text-lg text-slate-400 font-bold">{toCurrency}</span>
            </span>
        </div>
        
        <div className="text-center">
            <p className="text-[10px] text-slate-400">
                *Actualizado: <span className="capitalize">{lastUpdated}</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyWidget;

