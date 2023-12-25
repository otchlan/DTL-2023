import React, { useEffect, useState } from 'react';
import { getProjectDataFromAirtable } from '../api/airtable';

// Update the interface to match the actual data structure
interface ProjectData {
  fields: {
    Name: string;
    Description: string; // Updated field name
    URL: string; // Updated field name
  };
}

const Test = () => {
  // Initialize projectData with a type of ProjectData | null
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectDataFromAirtable('your_project_id');
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error instanceof Error ? error : new Error('An error occurred'));
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error loading data</p>;
  }

  if (!projectData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{projectData.fields.Name}</h1>
      <p>{projectData.fields.Description}</p>
      <a href={projectData.fields.URL} target="_blank" rel="noopener noreferrer">
        Visit Project Website
      </a>
    </div>
  );
};

export default Test;
