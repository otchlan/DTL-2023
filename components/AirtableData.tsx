import React, { useState } from 'react';
import axios from 'axios';

const AIRTABLE_ENDPOINT = 'https://api.airtable.com/v0/appIlVPr2xDeAuEy1/tblD1SYGDy8ChNg29';
const AIRTABLE_API_KEY = 'pat8x3Gi4AVrI1ZOW.b7845d961836183e235718e879f5ba2264a452055676a6c8a6df839296af0d12';

interface ButtonProps {
    buttonLabels: string[];
    displayTexts: string[];
}

const AirtableForm: React.FC<ButtonProps> = ({ buttonLabels, displayTexts }) => { 
    const [formData, setFormData] = useState({
        Imie: '',
        Nazwisko: '',
        Email: '',
        Numer_tel: '',
        Wiadomosc_do_nas: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
         const { name, value } = e.target;
         setFormData(prevState => ({ ...prevState, [name]: value }));
     };

     const [activeButton, setActiveButton] = useState<number | null>(null); // <-- Added this state

  
   const handleButtonClick = (index: number) => {
       setActiveButton(index);
   };

  const handleFirstFormSubmit = async () => {
      const { Imie, Nazwisko, Email, Numer_tel } = formData;
      await submitToAirtable({
          Imie,
          Nazwisko,
          Email,
          Numer_tel
      });
  };

  const handleSecondFormSubmit = async () => {
      const { Wiadomosc_do_nas, Imie, Email } = formData;
      await submitToAirtable({
          Wiadomosc_do_nas,
          Imie,
          Email
      });
  };

    const submitToAirtable = async (data: any) => {
            try {
                const response = await axios.post(AIRTABLE_ENDPOINT, {
                    fields: data
                }, {
                    headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data to Airtable:', error);
        }
      }

    const fontSize = '16px'; 

   return (
    <div style={{ width: '96%', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        fontSize: fontSize, 
        marginTop: "24px" 
      }}>
      <div style={{ 
        width: '96%', 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center', 
        gap: '1%'
        }}>
          {buttonLabels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              style={{
                background: activeButton === index ? 'transparent' : '#05ff9a',
                border: `2px solid ${activeButton === index ? '#05ff9a' : 'transparent'}`,
                borderRadius: '4px',
                padding: '10px 20px',
                cursor: 'pointer',
                transition: '0.3s',
                marginTop: '6px',
                color: activeButton === index ? '#05ff9a' : '#000',
                width: '165px',
                textAlign: 'center'
              }}
            >
              {activeButton === index ? displayTexts[index] : label}
            </button>
          ))}
      </div>
      {activeButton === 0 && (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '80%' }}>
          <input
            required
            style={{
                      boxSizing: 'border-box',
                      backgroundColor: '#000',
                      color: '#05ff9a',
                      borderColor: '#05ff9a',
                      borderRadius: '4px',
                    }}
            type="text"
            placeholder="Imię"
            name="Imie"
            value={formData.Imie}
            onChange={handleInputChange}
          />
          <input 
            required
            style={{
                      boxSizing: 'border-box',
                      backgroundColor: '#000',
                      color: '#05ff9a',
                      borderColor: '#05ff9a',
                      borderRadius: '4px',
                    }}
            type="text" 
            placeholder="Nazwisko" 
            name="Nazwisko" 
            value={formData.Nazwisko} 
            onChange={handleInputChange} 
          />
          <input 
            required
            style={{
                      boxSizing: 'border-box',
                      backgroundColor: '#000',
                      color: '#05ff9a',
                      borderColor: '#05ff9a',
                      borderRadius: '4px',
                    }}
            type="email" 
            placeholder="Firmowy Email" 
            name="Email" 
            value={formData.Email} 
            onChange={handleInputChange} 
          />
          <input 
            required
            style={{
                      boxSizing: 'border-box',
                      backgroundColor: '#000',
                      color: '#05ff9a',
                      borderColor: '#05ff9a',
                      borderRadius: '4px',
                    }}
            type="tel" 
            placeholder="Numer Telefonu" 
            name="Numer_tel" 
            value={formData.Numer_tel} 
            onChange={handleInputChange} 
          />
          <button 
                 style={{ marginTop: '10px', background: '#05ff9a', padding: '10px 20px', cursor: 'pointer' }}
                 onClick={handleFirstFormSubmit}
              >
                   Wyślij
              </button>
        </div>
      )}
      {activeButton === 1 && (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '80%' }}>
          <textarea
              required
              style={{ 
                boxSizing: 'border-box',
                width: '40%',
                height: '80px',
                resize: 'both',
                backgroundColor: '#000',
                color: '#05ff9a',
                borderColor: '#05ff9a',
                borderRadius: '4px',
              }}
              placeholder="Napisz do nas"
              name="Wiadomosc_do_nas"
              value={formData.Wiadomosc_do_nas}
              onChange={handleInputChange}
          />
          <input 
            required
            style={{
                boxSizing: 'border-box',
                backgroundColor: '#000',
                color: '#05ff9a',
                borderColor: '#05ff9a',
                borderRadius: '4px',
            }}
            type="text" 
            placeholder="Imie" 
            name="Imie" 
            value={formData.Imie} 
            onChange={handleInputChange} 
          />
          <input 
            required
            style={{
                boxSizing: 'border-box',
                backgroundColor: '#000',
                color: '#05ff9a',
                borderColor: '#05ff9a',
                borderRadius: '4px',
            }}
            type="text" 
            placeholder="Email" 
            name="Email" 
            value={formData.Email} 
            onChange={handleInputChange} 
          />
          <button 
                 style={{ marginTop: '10px', background: '#05ff9a', padding: '10px 20px', cursor: 'pointer' }}
                 onClick={handleSecondFormSubmit}
             >
                 Wyślij
             </button>
        </div>
      )}

       {activeButton === 2 && (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '80%' }}>
          <p style={{ color: '#05ff9a' }}>Łukasz</p>
          <p style={{ color: '#05ff9a' }}>500 387 792</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default AirtableForm;