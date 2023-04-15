
import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbaritem from './component/fungsional/navbar';
import Homepage from './component/fungsional/homepage';

import About from './component/fungsional/aboutpage';
import Profile from './component/fungsional/profile';
import Notfound from "./component/fungsional/notfound";
import Blogdetail from "./component/fungsional/blogdetail";

const App=() =>{

  return (

<Router>
<Navbaritem />

      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/home" element={<Homepage/> }/>
      <Route exact path="/profile" element={<Profile/> }/>
      <Route exact path="/about" element={<About/> }/>
     
      <Route exact path="/detail/1" element={<Blogdetail/>}/>
      </Routes>
    </Router>

  );

}




export default App;
