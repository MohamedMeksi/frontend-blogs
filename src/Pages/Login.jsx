import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Si vous utilisez React Router
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // Initialiser errors ici
const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    let errorMessages = {};
    
    // Exemple de validation (ajoutez ici la logique de validation)
    if (!email) {
      errorMessages.email = 'Email is required';
    }

    if (!password) {
      errorMessages.password = 'Password is required';
    }

    // Si des erreurs existent, les afficher
    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
    } else {
      // Sinon, faire le login (logique à implémenter)
      console.log("Login successful");
      navigate('/')
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        {/* Image Side */}
        <div className="image-side">
          <img src="https://img.freepik.com/photos-premium/concept-communication-bulle-discours-blog-parlant-disant_770123-351.jpg?semt=ais_hybrid" alt="Left side" className="image" />
        </div>

        {/* Form Side */}
        <div className="form-side">
          <div className="form-content">
            <h1>Welcome Back!</h1>
            <p>Let's Achieve More Together</p>

            <form onSubmit={login}>
              <div className="input-container">
                {/* Email Input */}
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

                {/* Password Input */}
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


              {/* Submit Button */}
              <div className="submit-container">
                <button
                  type="submit"
                  className="submit-button"
                >
                  <Link to="/"> 
                  Log in
                  </Link>
                </button>
              </div>

              {errors.general && <span className="error">{errors.general}</span>}
            </form>

            {/* Registration Link */}
            <div className="register-link">
              <p className='pip'>Don't have an account? <Link to="/signup">Register</Link></p>
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
.forgot{
t
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
.pip{
color:black
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
    border-color:rgb(241, 175, 127);
  }

  .error {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 5px;
  }

  .forgot-password {
    margin-bottom: 10px;
    color: #ff6b00
  }

  .submit-container {
    margin-top: 20px;
  }

  .submit-button {
    width: center;
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
    color:rgb(255, 179, 125);
    text-decoration: none;
  }

  .register-link a:hover {
    color:rgb(255, 106, 0);
  }

  .forgot-password a,
  .register-link a {
    transition: color 0.3s ease;
     text-decoration: none
     color :  #ff6b00
  }
`;

export default Form;