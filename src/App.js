import React from 'react';
import { HashRouter,BrowserRouter as Router, Route, Switch, Routes, Outlet , Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';
import Community from './components/Community';
// import './App.css';
import { useState } from 'react'
import Name from './components/Name';


const ipcRenderer = window.require('electron').ipcRenderer;

const App = () => {

  const [value, setValue] = useState(0);

  return (
    <HashRouter>
    <div className="App">
      <Navbar/> 
     
      <div className='px-4 py-4'>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/about" element={<Aboutus />}/>
        <Route exact path="/about/name" element={<Name />}/>
        <Route exact path="/comm" element={<Community />}/>
      </Routes>  
      </div>   
      
    </div>

    </HashRouter>    
  );
};

export default App;