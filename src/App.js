/*import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";

function App() {
  return (
     <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;*/

// import "./App.css";
// import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./component/Home";
// import Navbar from "./component/Navbar";
// import Products from "./component/Products";
// import Product from "./component/Product";
// import Cart from "./component/Cart";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<Product />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
// import Home from './component/Home';
// import Navbar from './component/Navbar';
// import Products from './component/Products';
// import Product from './component/Product';
// import Cart from './component/Cart';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/products" component={Products} />
//         <Route exact path="/products/:id" component={Product} />
//         <Route exact path="/cart" component={Cart} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './component/Home';
// import Navbar from './component/Navbar';
// import Products from './component/Products';
// import Product from './component/Product';
// import Cart from './component/Cart';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<Product />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import './App.css';
// import Home from './component/Home';
// import Navbar from './component/Navbar';
// import Products from './component/Products';
// import Product from './component/Product';
// import Cart from './component/Cart';

// function App() {
//   return (
    
//       <div>
//         <Navbar />
//        <Router>
//         <NavLink>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/products" component={Products} />
//           <Route exact path="/products/:id" component={Product} />
//           <Route exact path="/cart" component={Cart} />
//         </NavLink>
//         </Router>
//       </div>
    
//   );
// }

// export default App;

// import "./App.css";
// import Home from "./component/Home";
// import Navbar from "./component/Navbar";
// import {  Route, NavLink } from "react-router-dom";
// import Products from "./component/Products";
// import Product from "./component/Product";
// import Cart from "./component/Cart";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <NavLink>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/products" component={Products} />
//         <Route exact path="/products/:id" component={Product} />
//         <Route exact path="/cart" component={Cart} />
//       </NavLink>
//     </>
//   );
// }

// export default App;

import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';

import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
   
          <Route path="/" element={<Home />} />
      
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart/" element={<Cart />} />
       </Routes>
      </div>
   
  );
}

export default App;
