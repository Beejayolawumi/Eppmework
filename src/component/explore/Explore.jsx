import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import style from "./explore.module.css";

const Explore = () => {
  return (
    <section className={style.home}>
      <div className={style.h1}>
        <h1 className={style.explore}>
          Explore the
          <span className={style.artisan}> ideal local artisan </span> to
          <p> bring your home improvement </p> visions to life.
        </h1>
        <p className={style.exploreP}>
          Linking you with Skilled craftsmen, Expert contractors, and Reliable
          service
          <span>providers to redefine your home transformation journey.</span>
        </p>
        <div className={style.buttoncomponent}>
          <Link to="/Question" className={style.Link}>
            <Button
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                width: "200px",
                height: "30px",
                padding: "1.5rem",
                backgroundColor: "#0c6b71",
                border: "none",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontSize: "15px",
                fontWeight: "600",
                color: "white",
                cursor: "pointer",
              }}
            >
              Book a service
              <img
                className={style.arrow_img}
                src="\ArrowRight.png"
                alt="arrow right"
              />
            </Button>
          </Link>
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "1.5rem",
              width: "200px",
              height: "30px",
              backgroundColor: " #e1ad01",
              border: "none",
              borderRadius: "10px",
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: "600",
              color: "white",
            }}
          >
            Offer a service
            <img
              className={style.arrow_img}
              src="\ArrowRight.png"
              alt="arrow right"
            />
          </Button>
        </div>
        {/* <div className={style.book}>
          <div></div>
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
        </div> */}
      </div>

      <div className={style.image_container}>
        <div className={style.background}>
          <div className="image_container">
            <img
              className={style.animated_image}
              src="/medium-shot-man-cleaning-table 4.png"
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
        </div>
      </div>
    </section>
  );
};

export default Explore;
