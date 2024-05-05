
import React, { useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/outline'; // Import the TrashIcon from Heroicons


const DeleteTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  const getTeachers = async () => {
    try {
      const response = await fetch("http://localhost:8000/teachers");
      const jsonData = await response.json();
      setTeachers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/teachers/${id}`, {
        method: "DELETE"
      });
      const jsonData = await response.json();
      console.log(jsonData);
      getTeachers();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);


  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex flex-wrap justify-center">
        {teachers.map((teacher, index) => (
          <div key={teacher.teacher_id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name: {teacher.teacher_name}</div>
              <p className="text-gray-700 text-base">Specialization: {teacher.teacher_specialization}</p>
              <p className="text-gray-700 text-base">Contact: {teacher.teacher_contact_info}</p>
              <p className="text-gray-700 text-base">Email: {teacher.teacher_email}</p>
              <button onClick={() => handleDeleteClick(teacher.teacher_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
                <TrashIcon className="h-5 w-5 inline-block mr-1 mb-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteTeacher;