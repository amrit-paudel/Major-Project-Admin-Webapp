

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/solid'; // Import the Chevron icons from Heroicons
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Sidebar = () => {
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false); // State to handle the department dropdown
  const [isTeacherOpen, setIsTeacherOpen] = useState(false); // State to handle the teacher dropdown
  const [isStudentOpen, setIsStudentOpen] = useState(false); // State to handle the student dropdown
  const [isOpen, setIsOpen] = useState(false); // State to handle the sidebar

  return (
    <div className={`h-screen w-64 absolute bg-gray-800 text-white transform top-0 left-0 transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-5">
          <img src={process.env.PUBLIC_URL + '/images/tu_logo.svg'} alt="Logo" className="h-16" />
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
            <XIcon className="h-6 w-6" />
          </button>
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
        </nav>
 
      </div>
    </div>
  )
}

export default Sidebar;
