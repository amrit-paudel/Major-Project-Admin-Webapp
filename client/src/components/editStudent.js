

import React, { useEffect, useState } from 'react';
import { PencilIcon } from '@heroicons/react/outline'; // Import the PencilIcon from Heroicons



const EditStudent = () => {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [departments, setDepartments] = useState([]);

  const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:8000/students");
      const jsonData = await response.json();
      setStudents(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getDepartments = async () => {
    try {
      const response = await fetch("http://localhost:8000/departments");
      const jsonData = await response.json();
      setDepartments(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleEditClick = (student) => {
    setEditMode(true);
    setCurrentStudent(student);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const studentData = { 
        Student_Name: currentStudent.student_name, 
        Department_ID: currentStudent.department_id, 
        Student_Contact_Info: currentStudent.student_contact_info, 
        Student_Email: currentStudent.student_email 
      };
      const response = await fetch(`http://localhost:8000/students/${currentStudent.student_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
      });
      const jsonData = await response.json();
      console.log(jsonData);
      setEditMode(false);
      getStudents();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudents();
    getDepartments();
  }, []);

  
//   return (
//     <div className="container">
//       {editMode ? (
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-6">
//             <form onSubmit={handleSaveClick} className="mt-5">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentStudent.Student_Name}
//                   onChange={e => setCurrentStudent({...currentStudent, student_name: e.target.value})}
//                   placeholder="Student Name"
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <select
//                   value={currentStudent.Department_ID}
//                   onChange={e => setCurrentStudent({...currentStudent, department_id: e.target.value})}
//                   className="form-control"
//                 >
//                   {departments.map(department => (
//                     <option key={department.department_id} value={department.department_id}>
//                       {department.department_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentStudent.Student_Contact_Info}
//                   onChange={e => setCurrentStudent({...currentStudent, student_contact_info: e.target.value})}
//                   placeholder="Student Contact Info"
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   value={currentStudent.Student_Email}
//                   onChange={e => setCurrentStudent({...currentStudent, student_email: e.target.value})}
//                   placeholder="Student Email"
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
//               <th>Contact Info</th>
//               <th>Email</th>
//               <th>Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map(student => (
//               <tr key={student.student_id}>
//                 <td>{student.student_name}</td>
//                 <td>{student.student_contact_info}</td>
//                 <td>{student.student_email}</td>
//                 <td>
//                   <button onClick={() => handleEditClick(student)} className="btn btn-primary">Edit</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default EditStudent;




  return (
    <div className="container mx-auto px-4 py-2">
      {editMode ? (
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <form onSubmit={handleSaveClick} className="mt-5 space-y-4">
              <div>
                <input
                  type="text"
                  value={currentStudent.Student_Name}
                  onChange={e => setCurrentStudent({...currentStudent, student_name: e.target.value})}
                  placeholder="Student Name"
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <select
                  value={currentStudent.Department_ID}
                  onChange={e => setCurrentStudent({...currentStudent, department_id: e.target.value})}
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {departments.map(department => (
                    <option key={department.department_id} value={department.department_id}>
                      {department.department_name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  value={currentStudent.Student_Contact_Info}
                  onChange={e => setCurrentStudent({...currentStudent, student_contact_info: e.target.value})}
                  placeholder="Student Contact Info"
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={currentStudent.Student_Email}
                  onChange={e => setCurrentStudent({...currentStudent, student_email: e.target.value})}
                  placeholder="Student Email"
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
          {students.map((student, index) => (
            <div key={student.student_id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Name: {student.student_name}</div>
                <p className="text-gray-700 text-base">Contact Info: {student.student_contact_info}</p>
                <p className="text-gray-700 text-base">Email: {student.student_email}</p>
                <button onClick={() => handleEditClick(student)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
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

export default EditStudent;


