
import React, { useEffect, useState } from 'react';

const EditUniversity = () => {
  const [universities, setUniversities] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentUniversity, setCurrentUniversity] = useState(null);

  const getUniversities = async () => {
    try {
      const response = await fetch("http://localhost:8000/universities");
      const jsonData = await response.json();
      setUniversities(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleEditClick = (university) => {
    setEditMode(true);
    setCurrentUniversity(university);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const universityData = { 
        University_Name: currentUniversity.university_name, 
        University_Address: currentUniversity.university_address, 
        University_Contact_Info: currentUniversity.university_contact_info
      };
      const response = await fetch(`http://localhost:8000/universities/${currentUniversity.university_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(universityData)
      });
      const jsonData = await response.json();
      console.log(jsonData);
      setEditMode(false);
      getUniversities();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUniversities();
  }, []);

  return (
    <div className="container">
      {editMode ? (
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form onSubmit={handleSaveClick} className="mt-5">
              <div className="form-group">
                <input
                  type="text"
                  value={currentUniversity.university_name}
                  onChange={e => setCurrentUniversity({...currentUniversity, university_name: e.target.value})}
                  placeholder="University Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={currentUniversity.university_address}
                  onChange={e => setCurrentUniversity({...currentUniversity, university_address: e.target.value})}
                  placeholder="University Address"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={currentUniversity.university_contact_info}
                  onChange={e => setCurrentUniversity({...currentUniversity, university_contact_info: e.target.value})}
                  placeholder="University Contact Info"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>
          </div>
        </div>
      ) : (
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Contact Info</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {universities.map(university => (
              <tr key={university.university_id}>
                <td>{university.university_name}</td>
                <td>{university.university_address}</td>
                <td>{university.university_contact_info}</td>
                <td>
                  <button onClick={() => handleEditClick(university)} className="btn btn-primary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EditUniversity;

