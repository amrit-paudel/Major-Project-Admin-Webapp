


import React from 'react';
import { useNavigate } from 'react-router-dom';  // This is very essential for routing

import "./style.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: 'calc(100vh - 56px)'}}>
      <div className="container">
        <div className="row">
          {['Teachers', 'Students', 'Department', 'University'].map((item, index) => (
            <div key={index} className="col-sm-6 col-md-3 mb-4" onClick={() => handleCardClick(`/${item.toLowerCase()}`)}>
              <div className={`card text-white bg-${['primary', 'secondary', 'success', 'danger'][index]} h-100 shadow-lg card-hover`} style={{maxWidth: "18rem", cursor: 'pointer'}}>
                <div className="card-header">{item}</div>
                <div className="card-body">
                  <h5 className="card-title">Manage {item}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


