
import React, { useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/outline'; // Import the TrashIcon from Heroicons



const DeleteStudent = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:8000/students");
      const jsonData = await response.json();
      setStudents(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/students/${id}`, {
        method: "DELETE"
      });
      const jsonData = await response.json();
      console.log(jsonData);
      getStudents();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);



//   return (
//     <table className="table mt-5 text-center">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Contact Info</th>
//           <th>Email</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map(student => (
//           <tr key={student.student_id}>
//             <td>{student.student_name}</td>
//             <td>{student.student_contact_info}</td>
//             <td>{student.student_email}</td>
//             <td>
//               <button onClick={() => handleDeleteClick(student.student_id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DeleteStudent;





  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex flex-wrap justify-center">
        {students.map((student, index) => (
          <div key={student.student_id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name: {student.student_name}</div>
              <p className="text-gray-700 text-base">Contact Info: {student.student_contact_info}</p>
              <p className="text-gray-700 text-base">Email: {student.student_email}</p>
              <button onClick={() => handleDeleteClick(student.student_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
                <TrashIcon className="h-5 w-5 inline-block mr-1 mb-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteStudent;
