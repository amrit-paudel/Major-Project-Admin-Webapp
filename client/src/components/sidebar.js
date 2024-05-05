

// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 absolute bg-gray-800 text-white"> {/* This creates a sidebar with dark gray background */}
//       <div className="p-6"> {/* This adds some padding */}
//         <div className="mb-5">
//           <img src={process.env.PUBLIC_URL + '/images/tu_logo.svg'} alt="Logo" className="h-16" /> {/* This is for the logo */}
//         </div>
//         <nav>
//           <a href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Dashboard</a> {/* These are the links */}
//           <a href="/manage-department" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Manage Department</a>
//           <a href="/manage-teachers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Manage Teachers</a>
//           <a href="/manage-students" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Manage Students</a>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;


// import React, { useState } from 'react';
// import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'; // Import the Chevron icons from Heroicons

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to handle the dropdown

//   return (
//     <div className="h-screen w-64 absolute bg-gray-800 text-white">
//       <div className="p-6">
//         <div className="mb-5">
//           <img src={process.env.PUBLIC_URL + '/images/tu_logo.svg'} alt="Logo" className="h-16" />
//         </div>
//         <nav>
//           <a href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Dashboard</a>
//           <div>
//             <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500">
//               Manage Department
//               {isOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
//             </button>
//             {isOpen && (
//               <div className="ml-6">
//                 <a href="/addDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Add Department</a>
//                 <a href="/viewDepartments" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">View Department</a>
//                 <a href="/editDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Edit Department</a>
//                 <a href="/deleteDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Delete Department</a>
//               </div>
//             )}
//           </div>
//           <a href="/manage-teachers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Manage Teachers</a>
//           <a href="/manage-students" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Manage Students</a>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



// import React, { useState } from 'react';
// import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'; // Import the Chevron icons from Heroicons

// const Sidebar = () => {
//   const [isDepartmentOpen, setIsDepartmentOpen] = useState(false); // State to handle the department dropdown
//   const [isTeacherOpen, setIsTeacherOpen] = useState(false); // State to handle the teacher dropdown
//   const [isStudentOpen, setIsStudentOpen] = useState(false); // State to handle the student dropdown

//   return (
//     <div className="h-screen w-64 absolute bg-gray-800 text-white">
//       <div className="p-6">
//         <div className="mb-5">
//           <img src={process.env.PUBLIC_URL + '/images/tu_logo.svg'} alt="Logo" className="h-16" />
//         </div>
//         <nav>
//           <a href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Dashboard</a>
//           <div>
//             <button onClick={() => setIsDepartmentOpen(!isDepartmentOpen)} className="flex justify-between items-center w-full text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500">
//              Department
//               {isDepartmentOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
//             </button>
//             {isDepartmentOpen && (
//               <div className="ml-6">
//                 <a href="/addDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Add Department</a>
//                 <a href="/viewDepartments" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">View Department</a>
//                 <a href="/editDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Edit Department</a>
//                 <a href="/deleteDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Delete Department</a>
//               </div>
//             )}
//           </div>
//           <div>
//             <button onClick={() => setIsTeacherOpen(!isTeacherOpen)} className="flex justify-between items-center w-full text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500">
//               Teachers
//               {isTeacherOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
//             </button>
//             {isTeacherOpen && (
//               <div className="ml-6">
//                 <a href="/addTeacher" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Add Teacher</a>
//                 <a href="/viewTeachers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">View Teachers</a>
//                 <a href="/editTeacher" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Edit Teacher</a>
//                 <a href="/deleteTeacher" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Delete Teacher</a>
//               </div>
//             )}
//           </div>
//           <div>
//             <button onClick={() => setIsStudentOpen(!isStudentOpen)} className="flex justify-between items-center w-full text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500">
//               Students
//               {isStudentOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
//             </button>
//             {isStudentOpen && (
//               <div className="ml-6">
//                 <a href="/addStudent" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Add Student</a>
//                 <a href="/viewStudents" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">View Students</a>
//                 <a href="/editStudent" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Edit Student</a>
//                 <a href="/deleteStudent" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Delete Student</a>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;


import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'; // Import the Chevron icons from Heroicons
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Sidebar = () => {
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false); // State to handle the department dropdown
  const [isTeacherOpen, setIsTeacherOpen] = useState(false); // State to handle the teacher dropdown
  const [isStudentOpen, setIsStudentOpen] = useState(false); // State to handle the student dropdown

  return (
    <div className="h-screen w-64 absolute bg-gray-800 text-white">
      <div className="p-6">
        <div className="mb-5">
          <img src={process.env.PUBLIC_URL + '/images/tu_logo.svg'} alt="Logo" className="h-16" />
        </div>
        <nav>
          <NavLink to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Dashboard</NavLink>
          <div>
            <button onClick={() => setIsDepartmentOpen(!isDepartmentOpen)} className="flex justify-between items-center w-full text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500">
              Manage Department
              {isDepartmentOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
            </button>
            {isDepartmentOpen && (
              <div className="ml-6">
                <NavLink to="/addDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Add Department</NavLink>
                <NavLink to="/viewDepartments" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">View Department</NavLink>
                <NavLink to="/editDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Edit Department</NavLink>
                <NavLink to="/deleteDepartment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Delete Department</NavLink>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => setIsTeacherOpen(!isTeacherOpen)} className="flex justify-between items-center w-full text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500">
              Manage Teachers
              {isTeacherOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
            </button>
            {isTeacherOpen && (
              <div className="ml-6">
                <NavLink to="/addTeacher" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Add Teacher</NavLink>
                <NavLink to="/viewTeachers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">View Teachers</NavLink>
                <NavLink to="/editTeacher" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Edit Teacher</NavLink>
                <NavLink to="/deleteTeacher" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Delete Teacher</NavLink>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => setIsStudentOpen(!isStudentOpen)} className="flex justify-between items-center w-full text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500">
              Manage Students
              {isStudentOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
            </button>
            {isStudentOpen && (
              <div className="ml-6">
                <NavLink to="/addStudent" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Add Student</NavLink>
                <NavLink to="/viewStudents" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">View Students</NavLink>
                <NavLink to="/editStudent" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Edit Student</NavLink>
                <NavLink to="/deleteStudent" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">Delete Student</NavLink>
              </div>
            )}
          </div>

          <div>
            <NavLink to="/modelTraining" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500" activeClassName="bg-blue-500">
              Model Training
            </NavLink>

          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;




