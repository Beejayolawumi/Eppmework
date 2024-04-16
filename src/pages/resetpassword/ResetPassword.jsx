import React from "react";
import style from "./resetpassword.module.css";

const ResetPassword = () => {
  return (
    <div>
      <div className={style.container}>
        <img
          className={style.image}
          src="\medium-shot-man-cleaning-table 1.png"
        />
        <div className={style.help}>
          <img
            className={style.baseline}
            src="/src/assets/ic_baseline-help-outline.png"
            alt="baseline-icon"
          />
          Help
        </div>

        <div className={style.epme_container}>
          <img
            className={style.epp_header}
            src="/src/assets/EppMeWork.png"
            alt="image"
          />

          <img
            className={style.epp_header2}
            src="/src/assets/handshake (1) 1.png"
            alt="image"
          />

          <div className={style.form}>
            <div className={style.password_container}>
              <h3 className={style.password}>Reset Password</h3>
              <h4 className={style.reset_container}>
                <p className={style.reset}>
                  Enter you email address and we wiil send you a
                  <nav>reset instruction</nav>
                </p>
              </h4>
            </div>
            <p className={style.input_text}>
              <h4 className={style.input_content}>Email Address</h4>
            </p>
            <br />
            <input
              className={style.form_input}
              type="text"
              placeholder="Email Address"
            />
            <br />
          </div>

          <div className={style.btn_para}>
            <h4 className={style.btn_log}>Send</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
