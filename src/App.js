// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ticket/view/:couponAndDocId" element={<MainPage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;