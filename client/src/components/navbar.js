

// import React from 'react';

// const Navbar = () => {
//   const logoUrl = process.env.PUBLIC_URL + '/images/tu_logo.svg';

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       {/* <a className="navbar-brand" href="/">
//         <img src={logoUrl} alt="Logo" style={{height: '80px'}} />
//       </a> */}
//       <div className="navbar-text text-light ml-auto">
//         Admin  |  Department of Computer Engineering
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';

const Navbar = () => {
  const logoUrl = process.env.PUBLIC_URL + '/images/tu_logo.svg';

  return (
    <nav className="bg-gray-600 p-8 mt-0 w-full flex justify-between"> {/* Increase padding to make navbar size larger */}
      {/* <a className="navbar-brand" href="/">
        <img src={logoUrl} alt="Logo" style={{height: '80px'}} />
      </a> */}
      <div className="text-white ml-auto"> {/* Move text to left and change color to white */}
        Admin &nbsp; | &nbsp; Department of Computer Engineering
      </div>
    </nav>
  );
}

export default Navbar;



