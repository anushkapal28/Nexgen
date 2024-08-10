// Login.js
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from './AuthContext';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const history = useHistory();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleCheckboxChange = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Assuming login logic is successful
    toast.success('You are successfully logged in!');
    setTimeout(() => {
      setIsLoggedIn(true);
      history.push('/');
    }, 2000);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-6 form-container">
            <div className="form-content">
              <h3 className="title">Log in</h3>
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
              <button className="btn" onClick={handleLogin}>Login</button>
              <p className="register-link"><a href="/reset">Forgot password?</a></p>
              <p className="registert">Don't have an account? <a href="/signup" className="register-link">Register here</a></p>
            </div>
          </div>
          <div className="col-6 image-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
