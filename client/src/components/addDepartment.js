
// import React, { useState } from 'react';

// const AddDepartment = () => {
//   const [departmentName, setDepartmentName] = useState("");
//   const [departmentHead, setDepartmentHead] = useState("");
//   const [departmentContactInfo, setDepartmentContactInfo] = useState("");

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const body = { 
//         Department_Name: departmentName, 
//         Department_Head: departmentHead, 
//         Department_Contact_Info: departmentContactInfo
//       };
//       const response = await fetch("http://localhost:8000/departments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body)
//       });

//       window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-12 col-md-8 col-lg-6">
//           <form onSubmit={handleSubmit} className="mt-5">
//             <div className="form-group">
//               <input
//                 type="text"
//                 value={departmentName}
//                 onChange={e => setDepartmentName(e.target.value)}
//                 placeholder="Department Name"
//                 className="form-control"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 value={departmentHead}
//                 onChange={e => setDepartmentHead(e.target.value)}
//                 placeholder="Department Head"
//                 className="form-control"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 value={departmentContactInfo}
//                 onChange={e => setDepartmentContactInfo(e.target.value)}
//                 placeholder="Department Contact Info"
//                 className="form-control"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary mt-3">Add Department</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddDepartment;


import React, { useState, useEffect } from 'react';

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");
  const [departmentContactInfo, setDepartmentContactInfo] = useState("");
  const [universityId, setUniversityId] = useState("");
  
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch("http://localhost:8000/universities");
        const jsonData = await response.json();
        setUniversities(jsonData);
        if (jsonData.length > 0) { // after the universities are fetched and set in the universities state,  
          setUniversityId(jsonData[0].university_id); // we check if the list of universities is not empty. If it’s not, we set the universityId state to the ID of the first university in the list.
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUniversities();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const body = { 
        University_ID: universityId,
        Department_Name: departmentName, 
        Department_Head: departmentHead, 
        Department_Contact_Info: departmentContactInfo
      };
      const response = await fetch("http://localhost:8000/departments", { 
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
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="mb-4">
              <select
                value={universityId}
                onChange={e => setUniversityId(e.target.value)}
                className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {universities.map(university => (
                  <option key={university.university_id} value={university.university_id}>
                    {university.university_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={departmentName}
                onChange={e => setDepartmentName(e.target.value)}
                placeholder="Department Name"
                className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={departmentHead}
                onChange={e => setDepartmentHead(e.target.value)}
                placeholder="Department Head"
                className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={departmentContactInfo}
                onChange={e => setDepartmentContactInfo(e.target.value)}
                placeholder="Department Contact Info"
                className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
              Add Department
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;