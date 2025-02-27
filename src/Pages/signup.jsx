
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
   const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    let errorMessages = {};

    if (!username) {
      errorMessages.username = 'Username is required';
    }

    if (!email) {
      errorMessages.email = 'Email is required';
    }

    if (!password) {
      errorMessages.password = 'Password is required';
    }

    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
    } else {
      console.log("Registration successful");
      navigate('/login')
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <div className="image-side">
          <img src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-colorful-blog-speech-bubble-vector-png-image_6633021.png" alt="Left side" className="image" />
        </div>
        <div className="form-side">
          <div className="form-content">
            <h1>Create an Account</h1>
            <p>Join Us Today!</p>
            <form onSubmit={handleRegister}>
              <div className="input-container">
                <div className="input-field">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                  {errors.username && <span className="error">{errors.username}</span>}
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {errors.password && <span className="error">{errors.password}</span>}
                </div>
              </div>
              <div className="submit-container">
                <button type="submit" className="submit-button"><Link to="/login">Registe</Link></button>
              </div>
            </form>
            <div className="login-link">
              <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    display: flex;
    height: 100vh;
  }

  .image-side {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .form-side {
    flex: 1;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-content {
    width: 100%;
    max-width: 400px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: bold;
    color: #ff6b00;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 20px;
    font-weight: 600;
    color: #ff6b00;
  }

  .input-field {
    margin-bottom: 20px;
  }

  label {
    font-size: 1rem;
    color: #555;
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
  }

  input:focus {
    border-color: rgb(241, 175, 127);
  }

  .error {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 5px;
  }

  .submit-container {
    margin-top: 20px;
  }

  .submit-button {
    width: 100%;
    padding: 12px;
    background-color: #ff6b00;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #ff6b00;
  }

  .login-link {
    text-align: center;
    margin-top: 20px;
  }

  .login-link a {
    color: rgb(255, 179, 125);
    text-decoration: none;
  }

  .login-link a:hover {
    color: rgb(255, 106, 0);
  }
`;

export default Register;
