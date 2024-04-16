import React from "react";
import style from "./dashboard2.module.css";

const dummyData = [
  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },

  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },

  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },

  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },

  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },

  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },
  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },
  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },
  {
    id: 1,
    name: "John Mike",
    artisan: "Photographer",
    email: "Jibowu,Lagos",
    image: "/src/assets/Rectangle 282.png",
    price: "#35,000",
  },
];

const Dashboard2 = () => {
  return (
    <div className={style.main_container}>
      {/* <div className={style.parent_div}>
        <div className={style.requests_container}>
          <img
            className={style.checklist}
            src="/src/assets/checklist 1.png"
            alt="checklist logo"
          />
          <h3 className={style.requests}>Total Requests</h3>
          <p className={style.requests_para}>000</p>
        </div>
        <div className={style.requests_container}>
          <img
            className={style.checklist}
            src="/src/assets/Frame 43122.png"
            alt="mark logo"
          />
          <h3 className={style.requests}>Total Requests</h3>
          <p className={style.requests_para}>000</p>
        </div>
        <div className={style.requests_container}>
          <img
            className={style.checklist}
            src="/src/assets/expired 1.png"
            alt="expired logo"
          />
          <h3 className={style.requests}>Total Requests</h3>
          <p className={style.requests_para}>000</p>
        </div>
      </div> */}
      <p className={style.offer_para}>Offers</p>
      <div className={style.flex_container}>
        {dummyData.map((item, index) => {
          return (
            <div className={style.testimonial_container}>
              <div className={style.container}>
                <div className={style.parent_container}>
                  <div className={style.name}>{item.name} </div>
                  <div className={style.artisan}>{item.artisan}</div>
                  <div className={style.email}>
                    <img src="/src/assets/MapPin.png" alt="map logo" />
                    {item.email}
                    <img
                      className={style.star}
                      src="/src/assets/Frame 43146.png"
                      alt="5 star"
                    />
                  </div>
                  <div className={style.price}>{item.price}</div>

                  <div className={style.image_div}>
                    <img className={style.image} src={item.image} alt="image" />
                  </div>
                  <div className={style.btn_container}>
                    <button className={style.btn_accept}>
                      <h3 className={style.accept}>
                        Accept
                        <img
                          src="/src/assets/Group 2814.png"
                          alt="accept logo"
                        />
                      </h3>
                    </button>
                    <button className={style.btn_decline}>
                      <h3 className={style.decline}>
                        Decline
                        <img src="/src/assets/x-close.png" alt="decline logo" />
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard2;
