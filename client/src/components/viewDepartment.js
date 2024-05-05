
// import React, { useEffect, useState } from 'react';

// const ViewDepartments = () => {
//   const [departments, setDepartments] = useState([]);

//   const getDepartments = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/departments");
//       const jsonData = await response.json();
//       setDepartments(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getDepartments();
//   }, []);

//   return (
//     <table className="table mt-5 text-center">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Head</th>
//           <th>Contact Info</th>
//         </tr>
//       </thead>
//       <tbody>
//         {departments.map(department => (
//           <tr key={department.department_id}>
            
//             <td>{department.department_name}</td>
//             <td>{department.department_head}</td>
//             <td>{department.department_contact_info}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ViewDepartments;


import React, { useEffect, useState } from 'react';

const ViewDepartments = () => {
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
//         </tr>
//       </thead>
//       <tbody>
//         {departments.map(department => (
//           <tr key={department.department_id}>
//             <td>{department.department_name}</td>
//             <td>{department.department_head}</td>
//             <td>{department.department_contact_info}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ViewDepartments; 


return (
  <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
    <div className='container'>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full '>
          <div className='max-w-full overflow-x-auto'>
            <table className='w-full table-auto'>
              <thead className='text-center bg-primary'>
                <tr>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Name</th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Head</th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Contact Info</th>
                  {/* <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Specialization</th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Email</th> */}
                </tr>
              </thead>

              <tbody>
                {departments.map((department, index) => (
                  <tr key={department.department_id}>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{department.department_name}</td>
                    <td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{department.department_head}</td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{department.department_contact_info}</td>
                    {/* <td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{teacher.teacher_specialization}</td>
                    <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{teacher.teacher_email}</td> */}
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

export default ViewDepartments;

