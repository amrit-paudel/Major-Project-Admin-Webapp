import React, { useState } from 'react';

const AddUniversity = () => {
  const [universityName, setUniversityName] = useState("");
  const [universityAddress, setUniversityAddress] = useState("");
  const [universityContactInfo, setUniversityContactInfo] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const body = { 
        University_Name: universityName, 
        University_Address: universityAddress, 
        University_Contact_Info: universityContactInfo
      };
      const response = await fetch("http://localhost:8000/universities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group">
              <input
                type="text"
                value={universityName}
                onChange={e => setUniversityName(e.target.value)}
                placeholder="University Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value={universityAddress}
                onChange={e => setUniversityAddress(e.target.value)}
                placeholder="University Address"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value={universityContactInfo}
                onChange={e => setUniversityContactInfo(e.target.value)}
                placeholder="University Contact Info"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add University</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUniversity;

