import React, { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import style from "./signup.module.css";
import { Link } from "react-router-dom";
import { handleuser } from "../../Redux/slice/UserInformations";
import { useSelector, useDispatch } from "react-redux";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const { value } = useSelector((state) => state.userDetails);
  function handlePassword() {
    setShow(!show);
  }
  const dispatch = useDispatch();
  function dispay(e) {
    dispatch(handleuser(e.target.value));
    console.log(userDeatils);
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
          <span className={style.login_para}>
            <Link to="/WelcomePage" className={style.login}>
              Login
            </Link>
          </span>
        </div>

        <div className={style.border_top}></div>
        <div className={style.form_container}>
          <div className={style.signup_heading}>Sign Up</div>
          <div className={style.header_image}>
            <img
              className={style.epp_header2}
              src="/src/assets/Frame 1000005379.png"
              alt="image"
            />
          </div>

          <div className={style.form}>
            <input
              className={style.form_input}
              type="text"
              placeholder="First Name"
              onInput={dispay}
            />
            <br /> <br />
            <input
              className={style.form_input}
              type="text"
              placeholder="Last Name"
            />
            <br /> <br />
            <input
              className={style.form_input}
              type="email"
              placeholder="Email Address"
            />
            <br /> <br />
            <input
              className={style.form_input}
              type="text"
              placeholder="Phone Number"
            />
            <br /> <br />
            <input
              className={style.form_input}
              type={show ? "text" : "password"}
              placeholder="Password"
            />
            <div className={style.eye_icon} onClick={handlePassword}>
              {show ? <FiEye /> : <FiEyeOff />}
            </div>
            <br /> <br />
            <input
              className={style.form_input2}
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <div className={style.terms}>
              <p className={style.terms_para}>
                By clicking below and creating an account, I agree to
                EppMeWork’s
                <span> Terms of Service</span> and
                <span>Privacy Policy.</span>
              </p>
            </div>
            <div className={style.create_btn}>
              <p>
                <Link to="/DashBoard1" className={style.create_para}>
                  Create Account
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

export default SignUp;
