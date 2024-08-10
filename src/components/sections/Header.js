// Header.js
import React, { useState, useEffect, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { toast } from "react-toastify"; // Removed ToastContainer from here
import Hamburger from "./Hamburger";
import RoundedButtons from "../../common/RoundedButton";
import { VscAccount } from "react-icons/vsc";
import imga from "./Logo.png";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import AuthContext from "../Pages/AuthContext"; // Make sure this path is correct
import './Header.css';

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: <FiMenu />
  });
  const [disabled, setDisabled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Accessing authentication context
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: <FiMenu /> });
    });
  }, [history]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: <FiX />
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: <FiMenu />
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: <FiX />
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success('You have successfully logged out!');
    history.push("/");
  };

  return (
    <header className="abc">
      <div className="container">
        <div className="wrapper">
          <div className={`inner-header ${!state.clicked ? 'inner-header2' : ''}`}>
            <div className="logo">
              {!state.clicked && <Link to="/"><img className="img-logo" src={imga} alt="Logo" /></Link>}
            </div>
            <h5>
              <div className="book">
                {!state.clicked && <RoundedButtons><Link to='/contactus'>Book your Appointment</Link></RoundedButtons>}
              </div>
            </h5>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                <h3><RoundedButtons>{state.menuName}</RoundedButtons></h3>
              </button>
            </div>
            <h1 className="acc" onClick={toggleDropdown}>
              <VscAccount />
              {dropdownVisible && (
                <div className="dropdown">
                  {isLoggedIn ? (
                    <>
                      <Link to="/profile">Profile</Link>
                      <Link to="/" onClick={handleLogout}>Logout</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">Signin</Link>
                      <Link to="/signup">Signup</Link>
                    </>
                  )}
                </div>
              )}
            </h1>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
