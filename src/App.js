import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';
// import './App.css';
import { useState } from 'react'


const ipcRenderer = window.require('electron').ipcRenderer;

const App = () => {

  const [value, setValue] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />

        </Routes>
        <Outlet />

        <button onClick={() => setValue(value + 1)}>{value}</button>
      <button onClick={() => ipcRenderer.send("number", value)}>Send Value</button>

      
      </div>
    </Router>
  );
};

export default App;
