import React from "react";
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home'
import Create from './Create'
import Update from './Update'
import { BrowserRouter,Route,Routes } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
    
     <Routes>
     <Route path="/" element={<Home/>}/>  
     <Route path="/create" element={<Create/>}/>  

     <Route path="/edit/:id" element={<Update/>}/>  
     </Routes>
    </BrowserRouter>
  );
}
