import React, { useState } from 'react';
import axios from 'axios';

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission and page refresh

    // Access form input fields and extract data
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Store the data or send it to a server
    const data = {
      name,
      email,
      message,
    };

    try {
      // Make a POST request to the Airtable API
      const response = await axios.post(
        'https://airtable.com/applaLFSEX2TtW7kD/tblPQ9bUmLfr3I5kk/viwiTd9HqAFsfgfPZ',
        {
          fields: data,
        },
        {
          headers: {
            Authorization: 'patJS9jB1XMauO3eJ.5949a8624ff44aa1bf9bb9f437f3e13674607c1111840036ab9a1fc234b92a7c',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }

    // Example: Store the data in state
    setFormData(data);
  };

  return (
    <div
      style={{
        width: '96%',
        margin: '16px auto',
        backgroundColor: '#444',
        padding: '16px',
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" rows="4" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyFormComponent;
