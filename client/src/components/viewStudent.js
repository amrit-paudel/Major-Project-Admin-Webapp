import React, { useEffect, useState } from 'react';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:8000/students");
      console.log(response) // TESTING 
      const jsonData = await response.json();
      setStudents(jsonData);
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
//           <th>Student ID</th>
//           <th>Name</th>
//           <th>Contact Info</th>
//           <th>Department ID</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map(student => (
//           <tr key={student.student_id}>
//             <td>{student.student_id}</td>
//             <td>{student.student_name}</td>
//             <td>{student.student_contact_info}</td>
//             <td>{student.department_id}</td>
//             <td>{student.student_email}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ViewStudents;


return (
  <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
    <div className='container'>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full '>
          <div className='max-w-full overflow-x-auto'>
            <table className='w-full table-auto'>
              <thead className='text-center bg-primary'>
                <tr>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Student ID</th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Name</th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Contact Info</th>
                  {/* <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Department ID</th> */}
                  <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Email</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student, index) => (
                  <tr key={student.student_id}>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{student.student_id}</td>
                    <td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{student.student_name}</td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{student.student_contact_info}</td>
                    {/* <td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{teacher.teacher_specialization}</td> */}
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{student.student_email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default ViewStudents;

