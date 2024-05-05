

// import React, { useEffect, useState } from 'react';

// const EditDepartment = () => {
//   const [departments, setDepartments] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [currentDepartment, setCurrentDepartment] = useState(null);

//   const getDepartments = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/departments");
//       const jsonData = await response.json();
//       setDepartments(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const handleEditClick = (department) => {
//     setEditMode(true);
//     setCurrentDepartment(department);
//   };

//   const handleSaveClick = async (e) => {
//     e.preventDefault();
//     try {
//       const departmentData = { 

//         Department_Name: currentDepartment.department_name, 
//         Department_Head: currentDepartment.department_head, 
//         Department_Contact_Info: currentDepartment.department_contact_info
//       };
//       const response = await fetch(`http://localhost:8000/departments/${currentDepartment.department_id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(departmentData)
//       });
//       const jsonData = await response.json();
//       console.log(jsonData);
//       setEditMode(false);
//       getDepartments();
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getDepartments();
//   }, []);

//   return (
//     <div className="container">
//       {editMode ? (
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-6">
//             <form onSubmit={handleSaveClick} className="mt-5">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentDepartment.department_name}
//                   onChange={e => setCurrentDepartment({...currentDepartment, department_name: e.target.value})}
//                   placeholder="Department Name"
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentDepartment.department_head}
//                   onChange={e => setCurrentDepartment({...currentDepartment, department_head: e.target.value})}
//                   placeholder="Department Head"
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentDepartment.department_contact_info}
//                   onChange={e => setCurrentDepartment({...currentDepartment, department_contact_info: e.target.value})}
//                   placeholder="Department Contact Info"
//                   className="form-control"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary mt-3">Save</button>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <table className="table mt-5 text-center">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Head</th>
//               <th>Contact Info</th>
//               <th>Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {departments.map(department => (
//               <tr key={department.department_id}>
//                 <td>{department.department_name}</td>
//                 <td>{department.department_head}</td>
//                 <td>{department.department_contact_info}</td>
//                 <td>
//                   <button onClick={() => handleEditClick(department)} className="btn btn-primary">Edit</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default EditDepartment;


import React, { useEffect, useState } from 'react';
import { PencilIcon } from '@heroicons/react/outline'; // Import the PencilIcon from Heroicons


const EditDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState(null);

  const getDepartments = async () => {
    try {
      const response = await fetch("http://localhost:8000/departments");
      const jsonData = await response.json();
      setDepartments(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getUniversities = async () => {
    try {
      const response = await fetch("http://localhost:8000/universities");
      const jsonData = await response.json();
      setUniversities(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleEditClick = (department) => {
    setEditMode(true);
    setCurrentDepartment(department);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const departmentData = { 
        University_ID: currentDepartment.university_id,
        Department_Name: currentDepartment.department_name, 
        Department_Head: currentDepartment.department_head, 
        Department_Contact_Info: currentDepartment.department_contact_info
      };
      const response = await fetch(`http://localhost:8000/departments/${currentDepartment.department_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(departmentData)
      });
      const jsonData = await response.json();
      console.log(jsonData);
      setEditMode(false);
      getDepartments();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDepartments();
    getUniversities();
  }, []);



//   return (
//     <div className="container">
//       {editMode ? (
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-6">
//             <form onSubmit={handleSaveClick} className="mt-5">
//               <div className="form-group">
//                 <select
//                   value={currentDepartment.university_id}
//                   onChange={e => setCurrentDepartment({...currentDepartment, university_id: e.target.value})}
//                   className="form-control"
//                 >
//                   {universities.map(university => (
//                     <option key={university.university_id} value={university.university_id}>
//                       {university.university_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentDepartment.department_name}
//                   onChange={e => setCurrentDepartment({...currentDepartment, department_name: e.target.value})}
//                   placeholder="Department Name"
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentDepartment.department_head}
//                   onChange={e => setCurrentDepartment({...currentDepartment, department_head: e.target.value})}
//                   placeholder="Department Head"
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentDepartment.department_contact_info}
//                   onChange={e => setCurrentDepartment({...currentDepartment, department_contact_info: e.target.value})}
//                   placeholder="Department Contact Info"
//                   className="form-control"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary mt-3">Save</button>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <table className="table mt-5 text-center">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Head</th>
//               <th>Contact Info</th>
//               <th>Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {departments.map(department => (
//               <tr key={department.department_id}>
//                 <td>{department.department_name}</td>
//                 <td>{department.department_head}</td>
//                 <td>{department.department_contact_info}</td>
//                 <td>
//                   <button onClick={() => handleEditClick(department)} className="btn btn-primary">Edit</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default EditDepartment;



  return (
    <div className="container mx-auto px-4 py-2">
      {editMode ? (
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <form onSubmit={handleSaveClick} className="mt-5 space-y-4">
              <div>
                <select
                  value={currentDepartment.university_id}
                  onChange={e => setCurrentDepartment({...currentDepartment, university_id: e.target.value})}
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {universities.map(university => (
                    <option key={university.university_id} value={university.university_id}>
                      {university.university_name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  value={currentDepartment.department_name}
                  onChange={e => setCurrentDepartment({...currentDepartment, department_name: e.target.value})}
                  placeholder="Department Name"
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={currentDepartment.department_head}
                  onChange={e => setCurrentDepartment({...currentDepartment, department_head: e.target.value})}
                  placeholder="Department Head"
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={currentDepartment.department_contact_info}
                  onChange={e => setCurrentDepartment({...currentDepartment, department_contact_info: e.target.value})}
                  placeholder="Department Contact Info"
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
                Save
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {departments.map((department, index) => (
            <div key={department.department_id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Name: {department.department_name}</div>
                <p className="text-gray-700 text-base">Head: {department.department_head}</p>
                <p className="text-gray-700 text-base">Contact Info: {department.department_contact_info}</p>
                <button onClick={() => handleEditClick(department)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
                  <PencilIcon className="h-5 w-5 inline-block mr-1 mb-1" /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditDepartment;

