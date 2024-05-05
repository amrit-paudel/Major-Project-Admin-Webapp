
import React, { useEffect, useState } from 'react';

import { TrashIcon } from '@heroicons/react/outline'; // Import the TrashIcon from Heroicons



const DeleteDepartment = () => {
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    try {
      const response = await fetch("http://localhost:8000/departments");
      const jsonData = await response.json();
      setDepartments(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/departments/${id}`, {
        method: "DELETE"
      });
      const jsonData = await response.json();
      console.log(jsonData);
      getDepartments();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDepartments();
  }, []);

//   return (
//     <table className="table mt-5 text-center">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Head</th>
//           <th>Contact Info</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {departments.map(department => (
//           <tr key={department.department_id}>
//             <td>{department.department_name}</td>
//             <td>{department.department_head}</td>
//             <td>{department.department_contact_info}</td>
//             <td>
//               <button onClick={() => handleDeleteClick(department.department_id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DeleteDepartment;





  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex flex-wrap justify-center">
        {departments.map((department, index) => (
          <div key={department.department_id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name: {department.department_name}</div>
              <p className="text-gray-700 text-base">Head: {department.department_head}</p>
              <p className="text-gray-700 text-base">Contact Info: {department.department_contact_info}</p>
              <button onClick={() => handleDeleteClick(department.department_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
                <TrashIcon className="h-5 w-5 inline-block mr-1 mb-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteDepartment;
