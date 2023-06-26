import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';

// Define the type for the record object
type Record = {
  id: string;
  fields: {
    name: string;
    lastname: string;
    email: string;
    // Add additional fields as needed
  };
};

const AirtableData = () => {
  const [data, setData] = useState<Record[]>([]); // Specify the type for data state
  const [newRecord, setNewRecord] = useState({ name: '', lastname: '', email: '' });

  const fetchAirtableData = async () => {
    try {
      const response = await fetch(
        'https://api.airtable.com/v0/applaLFSEX2TtW7kD/tblPQ9bUmLfr3I5kk',
        {
          headers: {
            Authorization: 'Bearer keygn8nzTUU7vAHaR',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data from Airtable');
      }

      const jsonData = await response.json();
      setData(jsonData.records);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAirtableData();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://api.airtable.com/v0/applaLFSEX2TtW7kD/tblPQ9bUmLfr3I5kk',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer keygn8nzTUU7vAHaR',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ records: [{ fields: newRecord }] }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add new record to Airtable');
      }

      const jsonData = await response.json();
      console.log(jsonData); // Check the API response in the browser console

      // Reset the newRecord state and refetch the data
      setNewRecord({ name: '', lastname: '', email: '' });
      fetchAirtableData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>Airtable Data</h2>
      {data.map((record) => (
        <div key={record.id}>
          <h3 style={{ color: 'white' }}>{record.fields.name}</h3>
          <p style={{ color: 'white' }}>{record.fields.lastname}</p>
          <p style={{ color: 'white' }}>{record.fields.email}</p>
          {/* Add additional fields as needed */}
        </div>
      ))}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newRecord.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={newRecord.lastname}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newRecord.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit" style={{ borderRadius: '50%', backgroundColor: 'green' }}>
          Add Record
        </button>
      </form>
    </div>
  );
};

export default AirtableData;
