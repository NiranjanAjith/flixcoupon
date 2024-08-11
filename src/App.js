// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewCoupon from './pages/ViewCoupon';
import ViewTicket from './pages/ViewTicket';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/** TODO: For testing, use "(add test value here)" */}
          <Route path="/coupons/view/:couponAndDocId" element={<ViewCoupon />} />

          {/** For testing, use "TZ57NU6" */}
          <Route path="/tickets/view/:ticketAndDocId" element={<ViewTicket />} />

          {/* TODO: Add Page not found HTML template below */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;