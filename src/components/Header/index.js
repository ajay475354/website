import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

import { BsXLg, BsList } from "react-icons/bs";

const Header = () => {
  const [isClickedMenu, setClickedMenu] = useState(false);

  const menuIconClicked = () => {
    setClickedMenu((isClickedMenu) => !isClickedMenu);
  };

  return (
    <nav className="nav_container">
      {/*logo and items container*/}
      <div className="logo_tasks_container">
        <img
          src="https://learnedze.netlify.app/images/logo.png"
          alt="logo"
          className="logo"
        />

        {/*ul list container*/}
      </div>
      <div>
        <ul
          className={
            isClickedMenu ? "ul_list_container active" : "ul_list_container"
          }
        >
          <li className="link_items">
            <Link to="/" className="links">
              Home
            </Link>
          </li>

          <li className="link_items">
            <Link to="/courses" className="links">
              Courses
            </Link>
          </li>

          <li className="link_items">
            <Link to="/corporates" className="links">
              Corporates
            </Link>
          </li>
          <li className="link_items">
            <Link to="/about" className="links">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/*signin and signup container
      <div className="signin_signup_container">
        <p className="sig_in">Signin</p>
        <button className="sign_up">Signup</button>
      </div>
      */}

      {/*............mobile icons.........*/}
      <div onClick={menuIconClicked} className="mobile_view">
        {isClickedMenu ? (
          <BsXLg className="icon" />
        ) : (
          <BsList className="icon" />
        )}
      </div>
    </nav>
  );
};
export default Header;
