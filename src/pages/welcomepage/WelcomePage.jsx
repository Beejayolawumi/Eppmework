import React, { useState } from "react";
import style from "./welcomepage.module.css";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

import { Link } from "react-router-dom";

const WelcomePage = () => {
  const [show, setShow] = useState(false);

  function handlePassword() {
    setShow(!show);
  }
  return (
    <div className={style.main_container}>
      <img
        className={style.image_container}
        src="/medium-shot-man-cleaning-table 1.png"
        alt=" A young man cleaning the table"
      />

      <div className={style.help}>
        <img
          className={style.baseline}
          src="/src/assets/ic_baseline-help-outline.png"
          alt="baseline-icon"
        />
        Help
      </div>
      <div className={style.background}>
        <div className={style.already}>
          Already have an account?
          <span>
            <Link to="SignUp" className={style.signup}>
              Sign Up
            </Link>
          </span>
        </div>

        <div className={style.border_top}></div>
        <div className={style.form_container}>
          <div className={style.signup_heading}>Welcome Back </div>
          <div className={style.again}>Good to see you again!</div>
          <div className={style.header_image}>
            <img
              className={style.epp_header2}
              src="/src/assets/Frame 1000005379.png"
              alt="image"
            />
          </div>

          <div className={style.form}>
            <p className={style.email}>Email Address</p>
            <input
              className={style.form_input}
              type="email"
              placeholder="Email Address"
            />
            <br /> <br />
            <p className={style.password}>Password</p>
            <input
              className={style.form_input}
              type={show ? "text" : "password"}
              placeholder="**********"
            />
            <div className={style.eye_icon} onClick={handlePassword}>
              {show ? <FiEye /> : <FiEyeOff />}
            </div>
            <br /> <br />
            <div>
              <Link to="/ResetPassword" className={style.forgot}>
                Forgot Password?
              </Link>
            </div>
            <div className={style.create_btn}>
              <p>
                <Link to="/DashBoard1" className={style.create_para}>
                  Log in
                </Link>
              </p>
            </div>
            <div className={style.social_container}>
              <div className={style.border1}></div>
              or
              <div className={style.border2}></div>
            </div>
            <div className={style.media}>
              <p className={style.google}>
                <h4 className={style.google_para}>Continue with Google</h4>
                <img
                  className={style.image_google}
                  src="/src/assets/Frame 1000005001.png"
                  alt="google logo"
                />
              </p>
              <p className={style.google}>
                <h4 className={style.google_para}>Continue with Twitter</h4>
                <img
                  className={style.image_google}
                  src="/src/assets/bi_twitter-x.png"
                  alt="twitter logo"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
