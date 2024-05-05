

// import React from 'react';

// const Body = () => {
//   return (
//     <div className="p-10">
//       <h1 className="text-4xl font-bold mb-4">University Information</h1>
//       <div className="flex">
//         <div className="w-1/2 pr-4">
//           <h2 className="text-2xl font-bold mb-2">University Name</h2>
//           <p className="mb-2">Dummy University</p>
//           <h2 className="text-2xl font-bold mb-2">Address</h2>
//           <p className="mb-2">1234 University Street, University City, UN 56789</p>
//         </div>
//         <div className="w-1/2">
//           {/* Placeholder for the image */}
//           <div className="bg-gray-300 h-64 w-full"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;


import React from 'react';

const Body = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">University Information</h1>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-2">University Name</h2>
          <p className="mb-2 text-lg text-gray-700">Pulchowk Campus</p>
          <h2 className="text-2xl font-bold mb-2">Address</h2>
          <p className="mb-2 text-lg text-gray-700">Lalitpur, Pulchowk</p>
        </div>
        <div className="w-1/2">
          <img src={process.env.PUBLIC_URL + '/images/pcampus.jpg'} alt="Campus" className="h-64 w-full object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Body;






