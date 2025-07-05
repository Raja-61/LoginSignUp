import React, { useState } from 'react';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';



const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (!newPassword || !confirmPassword) {
      alert("Please fill all fields");
    } else if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("Password reset successfully!");
     
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <div className="text">Reset Password</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="input">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="submit-container">
          <div className="submit" onClick={handleReset}>
            Reset Password
          </div>
        </div>
         <div className="back-link">
          <Link to="/">← Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
