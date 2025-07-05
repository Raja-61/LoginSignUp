import React, { useState } from 'react';
import './LoginSignUp.css';
import { Link } from 'react-router-dom';

const LoginSignUp = () => {
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 
 const handleSubmit = () => {
    if (!email || !password || (action === "Sign Up" && !username)) {
      alert("Please fill all fields");
    } else {
      alert(`${action} Successful!`);
    }
  };

  return (
    <div className="main">
            <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <i class="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <i class="fa-solid fa-envelope"></i>
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
       <i class="fa-solid fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
     
      </div>

      <div className="submit-container">
<div
  className={`submit ${action === "Sign Up" ? "gray" : ""}`}
  onClick={() => {
    if (action === "Login") {
      handleSubmit();
    } else {
      setAction("Login");
    }
  }}
>
  Login
</div>

<div
  className={`submit ${action === "Login" ? "gray" : ""}`}
  onClick={() => {
    if (action === "Sign Up") {
      handleSubmit();
    } else {
      setAction("Sign Up");
    }
  }}
>
  Sign Up
</div>

      </div>

      <div className="forgot-password">
        Forgot Password? <Link to ="/ForgotPassword">Click Here!</Link>
      </div>
    </div>

    </div>

  
    
      );

      
};

export default LoginSignUp;


