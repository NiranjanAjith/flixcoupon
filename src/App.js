// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewCoupon from './pages/ViewCoupon';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/coupons/view/:couponAndDocId" element={<ViewCoupon />} />

          {/* TODO: Add components below */}
          <Route path="/tickets/view/:ticketAndDocId" element={<h1>Ticket View</h1>} />

          {/* TODO: Add Page not found HTML template below */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;