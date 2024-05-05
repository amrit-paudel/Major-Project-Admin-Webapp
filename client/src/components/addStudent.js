// import React, { useState, useEffect } from 'react';

// const AddStudent = () => {
//   const [studentName, setStudentName] = useState("");
//   const [departmentId, setDepartmentId] = useState("");
//   const [studentEmail, setStudentEmail] = useState("");

//   const [studentContactInfo, setStudentContactInfo] = useState("");

//   const [departments, setDepartments] = useState([]);

//   useEffect(() => {
//     const fetchDepartments = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/departments");
//         const jsonData = await response.json();
//         setDepartments(jsonData);
//         if (jsonData.length > 0) { // after the departments are fetched and set in the departments state,  
//           setDepartmentId(jsonData[0].department_id); // we check if the list of departments is not empty. If it’s not, we set the departmentId state to the ID of the first department in the list.
//         }
//       } catch (err) {
//         console.error(err.message);
//       }
//     };

//     fetchDepartments();
//   }, []);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const body = {
//         Student_Name: studentName,
//         Department_ID: departmentId,
//         Student_Email: studentEmail,
//         Student_Contact_Info: studentContactInfo
//       };
//       const response = await fetch("http://localhost:8000/students", {
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
//                 value={studentName}
//                 onChange={e => setStudentName(e.target.value)}
//                 placeholder="Student Name"
//                 className="form-control"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 value={studentContactInfo}
//                 onChange={e => setStudentContactInfo(e.target.value)}
//                 placeholder="Student Contact Info"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <select
//                 value={departmentId}
//                 onChange={e => setDepartmentId(e.target.value)}
//                 className="form-control"
//               >
//                 {departments.map(department => (
//                   <option key={department.department_id} value={department.department_id}>
//                     {department.department_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 value={studentEmail}
//                 onChange={e => setStudentEmail(e.target.value)}
//                 placeholder="Student Email"
//                 className="form-control"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary mt-3">Add Student</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddStudent;





import React, { useState, useEffect } from 'react';

const AddStudent = () => {
  const [studentName, setStudentName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const [studentContactInfo, setStudentContactInfo] = useState("");

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("http://localhost:8000/departments");
        const jsonData = await response.json();
        setDepartments(jsonData);
        if (jsonData.length > 0) { // after the departments are fetched and set in the departments state,  
          setDepartmentId(jsonData[0].department_id); // we check if the list of departments is not empty. If it’s not, we set the departmentId state to the ID of the first department in the list.
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchDepartments();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const body = {
        Student_Name: studentName,
        Department_ID: departmentId,
        Student_Email: studentEmail,
        Student_Contact_Info: studentContactInfo
      };
      const response = await fetch("http://localhost:8000/students", {
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
              <input
                type="text"
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
                placeholder="Student Name"
                className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={studentContactInfo}
                onChange={e => setStudentContactInfo(e.target.value)}
                placeholder="Student Contact Info"
                className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <select
                value={departmentId}
                onChange={e => setDepartmentId(e.target.value)}
                className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {departments.map(department => (
                  <option key={department.department_id} value={department.department_id}>
                    {department.department_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={studentEmail}
                onChange={e => setStudentEmail(e.target.value)}
                placeholder="Student Email"
                className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;