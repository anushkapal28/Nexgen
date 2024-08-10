// SignUp.js
import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css';
import { useHistory } from 'react-router-dom';
import AuthContext from './AuthContext';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const history = useHistory();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleCheckboxChange = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Assuming sign-up logic is successful
    toast.success('You have successfully signed up!');
    setTimeout(() => {
      setIsLoggedIn(true);
      history.push('/');
    }, 2000);
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-6 form-container">
            <div className="form-content">
              <h3 className="title">Sign Up</h3>
              <input
                className="input"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="input"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="input"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password-container">
                <input
                  className="input"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={passwordVisible}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="show-password">Show Password</label>
              </div>
              <button className="btn" onClick={handleSignUp}>Sign Up</button>
              <p className="login-link">Already have an account? <a href="/login" className="register-link">Log in here</a></p>
            </div>
          </div>
          <div className="col-6 image-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Sign Up"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
