import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    let errorMessages = {};

    if (!email) errorMessages.email = "Email is required";
    if (!password) errorMessages.password = "Password is required";

    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/user/login", {
        email,
        password
      });

      localStorage.setItem("token", response.data.token);
      console.log("Connexion réussie !");
      navigate("/");
    } catch (error) {
      if (error.response) {
        setErrors({ general: error.response.data.message || "Login failed" });
      } else {
        setErrors({ general: "Une erreur est survenue" });
      }
    }
  };

  return (
    <StyledWrapper>
      <Header />
      <div className="form-container">
        <div className="image-side">
          <img src="https://img.freepik.com/photos-premium/concept-communication-bulle-discours-blog-parlant-disant_770123-351.jpg?semt=ais_hybrid" alt="Left side" className="image" />
        </div>

        <div className="form-side">
          <div className="form-content">
            <h1>Welcome Back!</h1>
            <p>Let's Achieve More Together</p>

            <form onSubmit={login}>
              <div className="input-container">
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
                <button type="submit" className="submit-button">
                  Log in
                </button>
              </div>

              {errors.general && <span className="error">{errors.general}</span>}
            </form>

            <div className="register-link">
              <p className='pip'>Don't have an account? <Link to="/signup">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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

  .input-container {
    margin-top: 20px;
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

  .register-link {
    text-align: center;
    margin-top: 20px;
  }

  .register-link a {
    color: rgb(255, 179, 125);
    text-decoration: none;
  }

  .register-link a:hover {
    color: rgb(255, 106, 0);
  }
`;

export default Form;
