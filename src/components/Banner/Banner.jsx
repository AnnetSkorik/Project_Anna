import React from "react";
import banner from "../Banner/BannerImg/banner.svg";
import styles from "../Banner/Banner.module.css"

const Banner = () => {
  return (
    <>
      <banner className={styles}>
        {/* <div className="banner_text"> */}
        <div className="text">
          <h1> 
            Amazing Discounts<br />
          on Garden Products!
          </h1>
          <div className="check_out">
          <button>Check out</button>
          </div>
          </div>
          
        <div className="btn_banner_img">
          <img src={banner} alt="" />
        </div>
        {/* </div> */}
      
        
      </banner>
    </>
  );
};

export default Banner;
