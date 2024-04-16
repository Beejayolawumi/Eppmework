import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

import style from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Dropdown = () => {
    setOpen(!open);
  };

  const scrollTo = (y) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.container}>
      <div className={style.innercontainer}>
        <div className={style.logo}>
          <div className={style.eppme}>
            <img src="/src/assets/EppMeWork (1).png" alt="eppme logo" />
          </div>
          <img
            className={style.image1}
            src="/src/assets/handshake (1) 1.png"
            alt="logo"
          />
        </div>
        <div>
          <nav>
            <ul className={style.navbar}>
              <li className={style.servicework}></li>
              <li className={style.service} onClick={Dropdown}>
                Services
                <div
                  className={style.dropdown}
                  style={{ display: open ? "block" : "none" }}
                >
                  <ul className={style.dropdown_ul}>
                    <li>Drivers</li>
                    <li>Electrical Help</li>
                    <li>Professional Nannies</li>
                    <li>Cleaning Agents</li>
                    <li>Moving Help</li>
                    <li>Plumbing</li>
                    <li>Chef</li>
                    <li>Photograper</li>
                  </ul>
                </div>
              </li>

              <div className={style.work} onClick={() => scrollTo(1250)}>
                How it works
              </div>

              <li>
                <Link to="/SignUp" className={style.sign}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/WelcomePage" className={style.login}>
                  Log in
                </Link>
              </li>
              <li className={style.tasker}>Become a Tasker</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
