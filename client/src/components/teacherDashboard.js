

import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const navigate = useNavigate();

//   const handleCardClick = (path) => {
//     navigate(path);
//   }

const handleCardClick = (item) => {
    navigate(`/${item}`);
  }
  

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: 'calc(100vh - 56px)'}}>
      <div className="container">
        <div className="row">
          {['AddTeacher', 'ViewTeachers', 'EditTeacher', 'DeleteTeacher'].map((item, index) => (
            // <div key={index} className="col-sm-6 col-md-3" onClick={() => item === 'AddTeacher' && handleCardClick(`/${item}`)}>
            <div key={index} className="col-sm-6 col-md-3 mb-4" onClick={() => handleCardClick(item)}>

              <div className={`card text-white bg-${['primary', 'secondary', 'success', 'danger'][index]} h-100`} style={{maxWidth: "18rem", cursor: 'pointer'}}>
                <div className="card-header">{item}</div>
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
