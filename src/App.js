import React from "react";
import './App.css';

import Employee from './components/Employee.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      < Navbar fixed="top" />
      < Employee />
    </div>    
  );
}

export default App;
