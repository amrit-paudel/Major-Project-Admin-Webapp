


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Components added here
// import Navbar from "./components/navbar";
// import Dashboard from "./components/dashboard"; // Import the Dashboard component
// import TeacherDashboard from "./components/teacherDashboard";
// import StudentDashboard from "./components/studentDashboard"; // Import the StudentDashboard component
// import DepartmentDashboard from "./components/departmentDashboard"; // Import the DepartmentDashboard component
// import UniversityDashboard from "./components/universityDashboard"; // Import the UniversityDashboard component

// import AddTeacher from "./components/addTeacher"; // Import the AddTeacher component
// import ViewTeachers from "./components/viewTeacher"; // Import the ViewTeachers component
// import EditTeacher from "./components/editTeacher"; // Import the EditTeacher component
// import DeleteTeacher from "./components/deleteTeacher";

// import AddStudent from "./components/addStudent"; // Import AddStudent component
// import ViewStudents from "./components/viewStudent";
// import EditStudent from "./components/editStudent";
// import DeleteStudent from "./components/deleteStudent";

// import AddDepartment from "./components/addDepartment";
// import ViewDepartments from "./components/viewDepartment";
// import EditDepartment from "./components/editDepartment";
// import DeleteDepartment from "./components/deleteDepartment";

// import AddUniversity from "./components/addUniversity"; 
// import ViewUniversity from "./components/viewUniversity";
// import EditUniversity from "./components/editUniversity";
// import DeleteUniversity from "./components/deleteUniversity";




// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <div className="app-container">
//       <Routes>
//         <Route path="/teachers" element={<TeacherDashboard />} />
//         <Route path="/students" element={<StudentDashboard />} />
//         <Route path="/department" element={<DepartmentDashboard />} />
//         <Route path="/university" element={<UniversityDashboard />} />

//         <Route path="/addTeacher" element={<AddTeacher />} /> {/* Add this line */}
//         <Route path="/viewTeachers" element={<ViewTeachers />} />
//         <Route path="/editTeacher" element={<EditTeacher />} />
//         <Route path="/deleteTeacher" element={<DeleteTeacher />} />

//         <Route path="/addStudent" element={<AddStudent />} />
//         <Route path="/viewStudents" element={<ViewStudents />} />
//         <Route path="/editStudent" element={<EditStudent />} />
//         <Route path="/deleteStudent" element={<DeleteStudent />} />

//         <Route path="/addDepartment" element={<AddDepartment />} />
//         <Route path="/viewDepartments" element={<ViewDepartments />} />
//         <Route path="/editDepartment" element={<EditDepartment />} />
//         <Route path="/deleteDepartment" element={<DeleteDepartment />} />

//         <Route path="/addUniversity" element={<AddUniversity />} />
//         <Route path="/viewUniversity" element={<ViewUniversity />} />
//         <Route path="/editUniversity" element={<EditUniversity />} />
//         <Route path="/deleteUniversity" element={<DeleteUniversity />} />
        



//         <Route path="/" element={<Dashboard />} />
//       </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Components added here
// import Navbar from "./components/navbar";
// import Sidebar from "./components/sidebar";
// import Body from "./components/Body"; // Import the Body component
// // ... rest of your imports

// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <div className="flex">
//         <Sidebar/>
//         <div className="app-container">
//           <Routes>
//             <Route path="/" element={<Body />} /> {/* Add this line */}
//             {/* ... rest of your routes */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Components added here
// import Navbar from "./components/navbar";
// import Sidebar from "./components/sidebar";
// import Body from "./components/Body";
// import AddDepartment from "./components/addDepartment";
// import ViewDepartments from "./components/viewDepartment";
// import EditDepartment from "./components/editDepartment";
// import DeleteDepartment from "./components/deleteDepartment";
// // ... rest of your imports

// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <div className="flex">
//         <Sidebar/>
//         <div className="app-container">
//           <Routes>
//             <Route path="/" element={<Body />} />
//             <Route path="/addDepartment" element={<AddDepartment />} />
//             <Route path="/viewDepartments" element={<ViewDepartments />} />
//             <Route path="/editDepartment" element={<EditDepartment />} />
//             <Route path="/deleteDepartment" element={<DeleteDepartment />} />
//             {/* ... rest of your routes */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Components added here
// import Navbar from "./components/navbar";
// import Sidebar from "./components/sidebar";
// import Body from "./components/Body";

// import AddDepartment from "./components/addDepartment";
// import ViewDepartments from "./components/viewDepartment";
// import EditDepartment from "./components/editDepartment";
// import DeleteDepartment from "./components/deleteDepartment";
// import AddTeacher from "./components/addTeacher";
// import ViewTeachers from "./components/viewTeacher";
// import EditTeacher from "./components/editTeacher";
// import DeleteTeacher from "./components/deleteTeacher";
// import AddStudent from "./components/addStudent";
// import ViewStudents from "./components/viewStudent";
// import EditStudent from "./components/editStudent";
// import DeleteStudent from "./components/deleteStudent";
// // ... rest of your imports

// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <div className="flex">
//         <Sidebar/>
//         <div className="app-container">
//           <Routes>
//             <Route path="/" element={<Body />} />

//             <Route path="/addDepartment" element={<AddDepartment />} />
//             <Route path="/viewDepartments" element={<ViewDepartments />} />
//             <Route path="/editDepartment" element={<EditDepartment />} />
//             <Route path="/deleteDepartment" element={<DeleteDepartment />} />
//             <Route path="/addTeacher" element={<AddTeacher />} />
//             <Route path="/viewTeachers" element={<ViewTeachers />} />
//             <Route path="/editTeacher" element={<EditTeacher />} />
//             <Route path="/deleteTeacher" element={<DeleteTeacher />} />
//             <Route path="/addStudent" element={<AddStudent />} />
//             <Route path="/viewStudents" element={<ViewStudents />} />
//             <Route path="/editStudent" element={<EditStudent />} />
//             <Route path="/deleteStudent" element={<DeleteStudent />} />
//             {/* ... rest of your routes */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline'; // Import the MenuIcon from Heroicons
import './App.css';

// Components added here
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Body from "./components/Body";


import AddDepartment from "./components/addDepartment";
import ViewDepartments from "./components/viewDepartment";
import EditDepartment from "./components/editDepartment";
import DeleteDepartment from "./components/deleteDepartment";
import AddTeacher from "./components/addTeacher";
import ViewTeachers from "./components/viewTeacher";
import EditTeacher from "./components/editTeacher";
import DeleteTeacher from "./components/deleteTeacher";
import AddStudent from "./components/addStudent";
import ViewStudents from "./components/viewStudent";
import EditStudent from "./components/editStudent";
import DeleteStudent from "./components/deleteStudent";

import ModelTraining from './components/modelTraining';
// ... rest of your imports

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to handle the sidebar

  return (
    <Router>
      <Navbar/>
      <div className="flex">
        <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-4">
          <MenuIcon className="h-6 w-6" />
        </button>
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <Sidebar/>
          </div>
        )}
        <Sidebar className="hidden lg:block"/>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Body />} />


            <Route path="/addDepartment" element={<AddDepartment />} />
            <Route path="/viewDepartments" element={<ViewDepartments />} />
            <Route path="/editDepartment" element={<EditDepartment />} />
            <Route path="/deleteDepartment" element={<DeleteDepartment />} />
            <Route path="/addTeacher" element={<AddTeacher />} />
            <Route path="/viewTeachers" element={<ViewTeachers />} />
            <Route path="/editTeacher" element={<EditTeacher />} />
            <Route path="/deleteTeacher" element={<DeleteTeacher />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/viewStudents" element={<ViewStudents />} />
            <Route path="/editStudent" element={<EditStudent />} />
            <Route path="/deleteStudent" element={<DeleteStudent />} />

            <Route path="/modelTraining" element={<ModelTraining />} />
            {/* ... rest of your routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

