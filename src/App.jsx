import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Add from './components/Add/Add';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app-outlet">
        <Add />
      </div>
      <footer>
        <p>@ 2025 Copyright</p>
        <ul>
          <li>Terms & Conditions </li>
          <li>Privacy & Policy </li>
          <li>Customer Care</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
