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
          src="https://stage.learnedze.com/logo.png"
          alt="logo"
          className="logo"
        />

        {/*ul list container*/}
        <ul
          className={
            isClickedMenu ? "ul_list_container active" : "ul_list_container"
          }
        >
          <li className="link_items">Home</li>
          <li className="link_items">About</li>
          <li className="link_items">Courses</li>
          <li className="link_items">Trainers</li>
          <li className="link_items">Corporates</li>
        </ul>
      </div>

      {/*signin and signup container*/}
      <div className="signin_signup_container">
        <p className="sig_in">Signin</p>
        <button className="sign_up">Signup</button>
      </div>

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
