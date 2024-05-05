
import React, { useEffect, useState } from 'react';

const DeleteUniversity = () => {
  const [universities, setUniversities] = useState([]);

  const getUniversities = async () => {
    try {
      const response = await fetch("http://localhost:8000/universities");
      const jsonData = await response.json();
      setUniversities(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/universities/${id}`, {
        method: "DELETE"
      });
      const jsonData = await response.json();
      console.log(jsonData);
      getUniversities();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUniversities();
  }, []);

  return (
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Contact Info</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {universities.map(university => (
          <tr key={university.university_id}>
            <td>{university.university_name}</td>
            <td>{university.university_address}</td>
            <td>{university.university_contact_info}</td>
            <td>
              <button onClick={() => handleDeleteClick(university.university_id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeleteUniversity;


