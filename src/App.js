
import React from 'react';
import './App.css';
import Gc from './component/fungsional/home.jsx'
import Beranda from './component/class/beranda';
import Parents from './component/class/parents';


function App() {
  return (
    <div className="App">
     <Beranda/>
     <span> </span>
      <Gc/>
    
      <p>Parent parssing data anatar component </p>
      <Parents/>
    </div>
  );
}

export default App;
