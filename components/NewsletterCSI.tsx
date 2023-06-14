import React, { useState } from "react";
import { firebase } from "../firebase/firebaseConfig";
import { db } from "../firebase/firebaseConfig";


interface NewsletterCSIProps {
  onSubmit: (email: string) => void;
}

const NewsletterCSI: React.FC<NewsletterCSIProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const docRef = await firebase.firestore().collection("Test").add({
        name,
        lastname,
        email,
      });
      console.log("Data added successfully with ID: ", docRef.id);
      onSubmit(email);
      clearFields();
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  const clearFields = () => {
    setName("");
    setLastname("");
    setEmail("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div style={{ width: "96%", margin: "16px auto", border: "1px solid white", borderRadius: "8px", textAlign: "center" }}>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <input
          type="text"
          placeholder="Enter your lastname"
          value={lastname}
          onChange={handleLastnameChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <button type="submit" style={{ backgroundColor: "#bbb", color: "white", padding: "8px 16px", borderRadius: "4px", border: "none" }}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterCSI;
