
import React, { useEffect, useState } from 'react';

import { PencilIcon } from '@heroicons/react/solid'; // Import the PencilIcon from Heroicons


const EditTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [departments, setDepartments] = useState([]);

  const getTeachers = async () => {
    try {
      const response = await fetch("http://localhost:8000/teachers");
      const jsonData = await response.json();
      setTeachers(jsonData);
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

  const handleEditClick = (teacher) => {
    setEditMode(true);
    setCurrentTeacher(teacher);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const teacherData = {  // this teacher data is sent to the Data Base after editing
        Teacher_Name: currentTeacher.teacher_name,
        Department_ID: currentTeacher.department_id,
        Teacher_Contact_Info: currentTeacher.teacher_contact_info,
        Teacher_Specialization: currentTeacher.teacher_specialization,
        Teacher_Email: currentTeacher.teacher_email
      };
      const response = await fetch(`http://localhost:8000/teachers/${currentTeacher.teacher_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teacherData)
      });
      const jsonData = await response.json();
      console.log(jsonData);
      setEditMode(false);
      getTeachers();
    } catch (err) {
      console.error(err.message);
    }
  };
  

  useEffect(() => {
    getTeachers();
    getDepartments();
  }, []);


  return (
    <div className="container mx-auto px-4 py-2">
      {editMode ? (
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <form onSubmit={handleSaveClick} className="mt-5 space-y-4">
              <div>
                <input
                  type="text"
                  value={currentTeacher.teacher_name}
                  onChange={e => setCurrentTeacher({...currentTeacher, teacher_name: e.target.value})}
                  placeholder="Teacher Name"
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <select
                  value={currentTeacher.department_id}
                  onChange={e => setCurrentTeacher({...currentTeacher, department_id: e.target.value})}
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
                  value={currentTeacher.teacher_contact_info}
                  onChange={e => setCurrentTeacher({...currentTeacher, teacher_contact_info: e.target.value})}
                  placeholder="Teacher Contact Info"
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={currentTeacher.teacher_specialization}
                  onChange={e => setCurrentTeacher({...currentTeacher, teacher_specialization: e.target.value})}
                  placeholder="Teacher Specialization"
                  className="form-control appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={currentTeacher.teacher_email}
                  onChange={e => setCurrentTeacher({...currentTeacher, teacher_email: e.target.value})}
                  placeholder="Teacher Email"
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
          {teachers.map((teacher, index) => (
            <div key={teacher.teacher_id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Name: {teacher.teacher_name}</div>
                <p className="text-gray-700 text-base">Contact: {teacher.teacher_contact_info}</p>
                <p className="text-gray-700 text-base">Specialization: {teacher.teacher_specialization}</p>
                <p className="text-gray-700 text-base">Email: {teacher.teacher_email}</p>
                <button onClick={() => handleEditClick(teacher)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
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

export default EditTeacher;