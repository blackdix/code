
import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbaritem from './component/fungsional/navbar';
import Homepage from './component/fungsional/homepage';

import About from './component/fungsional/aboutpage';
import Profile from './component/fungsional/profile';
import Notfound from "./component/fungsional/notfound";
import Blogdetail from "./component/fungsional/blogdetail";
import Mahasiswa from './component/class/mahasiswa';
import Addmahasiswa from './component/class/addmahasiswa';
import Editmahasiswa from './component/class/editmahasiswa';
const App=() =>{

  return (

<Router>
<Navbaritem />

      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/home" element={<Homepage/> }/>
      <Route exact path="/profile" element={<Profile/> }/>
      <Route exact path="/mahasiswa" element={<Mahasiswa/> }/>
      <Route exact path="/mahasiswa/add" element={<Addmahasiswa/> }/>
      <Route exact path="/mahasiswa/edit" element={<Editmahasiswa/> }/>
      <Route exact path="/about" element={<About/> }/>
       
      <Route exact path="/detail" element={<Blogdetail/>}/>
      <Route exact path="*" element={<Notfound/>}/>
      </Routes>
    </Router>

  );

}




export default App;
