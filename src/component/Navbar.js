// import React from 'react';

//  const Navbar = ()=>{
//     return(
//         <div>
// <nav class="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
//   <div class="container">
    
//     <a class="navbar-brand fw-bold fs-4" href="#">
//         LA COLLECTION</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Product</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//        </li>
//        <li class="nav-item">
//           <a class="nav-link" href="#">Contact</a>
//        </li>
//       </ul>
//        <div className = "buttons">
//         <a href="" className="btn btn-outline-dark">
//             <i className="fa fa-sign-in me-1"></i>Login</a>
//        </div>
//        <div className = "buttons">
//         <a href="" className="btn btn-outline-dark ms-2">
//             <i className="fa fa-user-plus me-1"></i>Register</a>
//        </div>
          
//        <div className = "buttons">
//         <a href="" className="btn btn-outline-dark ms-2">
//             <i className="fa fa-shopping-cart me-1"></i>cart(0)</a>
//        </div>
          
     
     
//     </div>
//   </div>
// </nav>

//         </div>
//     );
//  }

//   export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark">
                   <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const cartItems = useSelector((state) => state.handleCart.cartItems);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
//         <div className="container">
//           <NavLink className="navbar-brand fw-bold fs-4" to="/">
//             LA COLLECTION
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/products">
//                   Products
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/about">
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact">
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//             <div className="buttons">
//               <NavLink to="/login" className="btn btn-outline-dark">
//                 <i className="fa fa-sign-in me-1"></i> Login
//               </NavLink>
//               <NavLink to="/register" className="btn btn-outline-dark ms-2">
//                 <i className="fa fa-user-plus me-1"></i> Register
//               </NavLink>
//               <NavLink to="/cart" className="btn btn-outline-dark ms-2">
//                 <i className="fa fa-shopping-cart me-1"></i> Cart ({cartItems.length})
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
// import React from 'react';

//  const Navbar = ()=>{
//     return(
//         <div>
// <nav class="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
//   <div class="container">
    
//     <a class="navbar-brand fw-bold fs-4" to="/">
//         LA COLLECTION</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//            class="nav-link active" aria-current="page" to="/">Home
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" to="/products">Product</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" to="/about">About</a>
//        </li>
//        <li class="nav-item">
//           <a class="nav-link" href="#">Contact</a>
//        </li>
//       </ul>
//        <div className = "buttons">
//         <a href="" className="btn btn-outline-dark">
//             <i className="fa fa-sign-in me-1"></i>Login</a>
//        </div>
//        <div className = "buttons">
//         <a href="" className="btn btn-outline-dark ms-2">
//             <i className="fa fa-user-plus me-1"></i>Register</a>
//        </div>
          
//        <div className = "buttons">
//         <a href="" className="btn btn-outline-dark ms-2">
//             <i className="fa fa-shopping-cart me-1"></i>cart(0)</a>
//        </div>
          
     
     
//     </div>
//   </div>
// </nav>

//         </div>
//     );
//  }

//   export default Navbar;