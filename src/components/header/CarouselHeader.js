import React from "react";
import { Carousel } from "antd";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import styles from "./CarouselHeader.module.css";

const CarouselHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    effect: "fade",
  };

  return (
    <Carousel {...settings} className={styles.carouselStyle}>
      <div>
        <img src={photo3} alt="Photo3" />
      </div>
      <div>
        <img src={photo2} alt="Photo2" />
      </div>
      <div>
        <img src={photo1} alt="Photo1" />
      </div>
    </Carousel>
  );
};
export default CarouselHeader;
