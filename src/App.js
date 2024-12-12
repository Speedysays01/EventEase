// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarPage from './Pages/CalendarPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='AppHeader'>
        <h1>EventEase</h1>
        <h2>A Dynamic Event Calender</h2>
        </div>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
