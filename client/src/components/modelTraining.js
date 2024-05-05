

import React, { useEffect, useState } from 'react';

const ModelTraining = () => {
    const [students, setStudents] = useState([]);

    const [tooltipText, setTooltipText] = useState('');


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


    // Check if all students have max_img_reached set to true
    const allImagesCollected = students.every(student => student.max_img_reached);

    const handleMouseEnter = () => {
        console.log("Mouse enter")
        if (!allImagesCollected) {
            console.log("inside the handlemouseenter function")
            setTooltipText("Please collect training images for all students");
        }
    };

    const handleMouseLeave = () => {
        console.log("Mouse leave")
        setTooltipText('');
    };



    return (
        <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
            <div className='container'>
                <div className='flex flex-wrap -mx-4'>
                    <div className='w-full '>
                        <div className='max-w-full overflow-x-auto'>
                            <table className='w-full table-auto'>
                                <thead className='text-center bg-primary'>
                                    <tr>
                                        {/* <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Student ID</th> */}
                                        <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Name</th>
                                        <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Contact Info</th>
                                        {/* <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Department ID</th> */}
                                        <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Email</th>
                                        <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Training Data</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {students.map((student, index) => (
                                        <tr key={student.student_id}>
                                            {/* <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{student.student_id}</td> */}
                                            <td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{student.student_name}</td>
                                            <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{student.student_contact_info}</td>
                                            {/* <td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{teacher.teacher_specialization}</td> */}
                                            <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{student.student_email}</td>
                                            {/* <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{String(student.max_img_reached)}</td> */}
                                            <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium flex justify-center items-center">
                                                {student.max_img_reached ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-blue-500">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-red-500">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                )}
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center mt-4">
                {/* <button
                    onMouseEnter={() => {
                        console.log("from hover", allImagesCollected)
                        if (!allImagesCollected) {
                            setTooltipText("Please collect training images for all students");
                        }
                    }}
                    onMouseLeave={() => {
                        console.log("from hover", allImagesCollected)
                        setTooltipText('');
                    }}
                    className={`py-2 px-4 rounded transition duration-200 ${allImagesCollected ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 pointer-events-none'}`}
                >
                    Start Model Training {console.log(allImagesCollected)}
                    {tooltipText && <div className="absolute bg-black text-white rounded p-1 text-xs">{tooltipText}</div>}
                </button> */}
                {/* 
                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`py-2 px-4 rounded transition duration-200 ${allImagesCollected ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 pointer-events-none'
                        }`}
                >
                    Start Model Training
                    {tooltipText && (
                        <div className="absolute bg-black text-white rounded p-1 text-xs">
                            {tooltipText}
                        </div>
                    )}
                </button> */}

                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                        fetch('http://127.0.0.1:8080/startModelTraining', {
                            method: 'POST',
                        })
                            .then(response => response.json())
                            .then(data => console.log(data))
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    }}
                    className={`py-2 px-4 rounded transition duration-200 ${allImagesCollected ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 pointer-events-none'
                        }`}
                >
                    Start Model Training
                    {tooltipText && (
                        <div className="absolute bg-black text-white rounded p-1 text-xs">
                            {tooltipText}
                        </div>
                    )}
                </button>


            </div>


        </section>
    );
};

export default ModelTraining;



