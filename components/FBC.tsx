import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

interface FirebaseData {
  name: string;
  lastname: string;
  email: string;
}

const FirebaseDataComponent: React.FC = () => {
  const [data, setData] = useState<FirebaseData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection("Test").get();
        console.log("----------Snapshot:", snapshot); // Check if snapshot contains data
        const fetchedData = snapshot.docs.map((doc) => doc.data() as FirebaseData);
        console.log("----------Fetched Data:", fetchedData); // Check if fetchedData is populated
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h2>Data from Firebase Database</h2>
      {data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Lastname: {item.lastname}</p>
          <p>Email: {item.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FirebaseDataComponent;
