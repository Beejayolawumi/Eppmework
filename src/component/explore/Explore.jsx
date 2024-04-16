import React from "react";
import { Link } from "react-router-dom";

import style from "./explore.module.css";

const Explore = () => {
  return (
    <div className={style.home}>
      <div className={style.h1}>
        <h1 className={style.explore}>
          Explore the
          <span className={style.artisan}> ideal local artisan </span> to
          <p> bring your home improvement </p> visions to life.
        </h1>
        <p className={style.exploreP}>
          Linking you with Skilled craftsmen, Expert contractors, and Reliable
          service
          <p>providers to redefine your home transformation journey.</p>
        </p>
      </div>

      <div>
        <div className={style.book}>
          <h4>
            <Link to="/Question" className={style.btn__1}>
              <p>Book a Service</p>
              <p className={style.arrow}>
                <img
                  className={style.arrow_img}
                  src="\ArrowRight.png"
                  alt="arrow right"
                />
              </p>
            </Link>
          </h4>
          <h4 className={style.btn__2}>
            Offer Services
            <p className={style.arrow}>
              <img
                className={style.arrow_img2}
                src="\ArrowRight.png"
                alt="arrow right"
              />
            </p>
            <p className={style.arrow2}></p>
          </h4>
        </div>
      </div>
      <div className={style.image_container}>
        <div className={style.background}>
          <div className="image_container">
            <img
              className={style.animated_image}
              src="/public/medium-shot-man-cleaning-table 4.png"
              alt="A man cleaning"
            />

            <img
              className={style.animated_image}
              src="/src/assets/african-american-man-getting-ready-his-new-home-move (1) 1.png"
              alt="A man cleaning"
            />
            <img
              className={style.animated_image}
              src="/src/assets/handsome-elegant-man-car-salon 1.png"
              alt="A man cleaning"
            />
            <img
              className={style.animated_image}
              src="/src/assets/side-view-adult-male-cleaning-window 1 (1).png"
              alt="A man cleaning"
            />
          </div>

          {/* <div className={style.image_container}>
            <div>
              <img
                className={style.image}
                src="\medium-shot-man-cleaning-table 4.png"
                alt="A man cleaning"
              />
            </div>
            <div>
              <img
                className={style.image2}
                src="/src/assets/african-american-man-getting-ready-his-new-home-move (1) 1.png"
                alt="A man cleaning"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Explore;
