import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from './LoginSignUp';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
