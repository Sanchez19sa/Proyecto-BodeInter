import React, { useState } from 'react'
import './Form.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import contactImg from '../../../assets/img/contactImg.jpg'

interface BaseField {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

interface InputField extends BaseField {
  type: "input";
  inputType: string;
}

interface PhoneField extends BaseField {
  type: "phone";
  countryCode: {
    value: string;
    flag: string;
  };
}

type FormField = InputField | PhoneField;

const formFields: FormField[] = [
  {
    type: "input",
    name: "name",
    placeholder: "Nombre completo",
    inputType: "text",
    required: true
  },
  {
    type: "input",
    name: "company",
    placeholder: "Empresa",
    inputType: "text",
    required: true
  },
  {
    type: "input",
    name: "email",
    placeholder: "Correo electrónico",
    inputType: "email",
    required: true
  },
  {
    type: "phone",
    name: "phone",
    placeholder: "Número de teléfono",
    countryCode: {
      value: "+57",
      flag: "🇨🇴"
    },
    required: true
  }
];

const heroContent = {
  header: {
    title: "Contáctanos",
    subtitle: "Utilice el siguiente formulario para ponerse en contacto con el equipo de atencion al cliente."
  }
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      phone: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formattedPhone = formData.phone.startsWith('+') ? formData.phone : `+${formData.phone} `;
    
    const trimmedPhone = formattedPhone.trim();

    const whatsappMessage = encodeURIComponent(
      `¡Hola! Bodeinter S.A.S, me gustaría recibir más información sobre sus servicios.\n\n` +
      `A continuación, comparto mis datos:\n` +
      `- Nombre y apellido: ${formData.name}\n` +
      `- Empresa: ${formData.company}\n` +
      `- Correo electrónico: ${formData.email}\n` +
      `- Teléfono: ${trimmedPhone}\n\n` +
      `Quedo atento a su respuesta.\n` +
      `¡Gracias!`
    );

    const whatsappUrl = `https://wa.me/3155261930?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-form-section">
      <div className="contact-form-wrapper">
        <div className="contact-form-image">
          <img 
            src={contactImg} 
            alt="Contact us illustration" 
            loading="lazy"
          />
        </div>
        
        <div className="contact-form-content">
          <div className="contact-form-header">
            <h1>{heroContent.header.title}</h1>
            <p>{heroContent.header.subtitle}</p>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form-inner">
              <form onSubmit={handleSubmit}>
                {formFields.map((field, index) => (
                  field.type === "phone" ? (
                    <PhoneInput
                      key={index}
                      country={'co'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: field.name,
                        required: field.required,
                        placeholder: field.placeholder
                      }}
                    />
                  ) : (
                    <input
                      key={index}
                      type={field.inputType}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  )
                ))}
                <button type="submit">
                  Enviar mensaje →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
