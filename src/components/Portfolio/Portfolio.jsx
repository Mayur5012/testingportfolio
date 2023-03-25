import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Crypco from "../../img/crypco.png";
import Swasthya from "../../img/swasthya.png";
import Bussy from "../../img/bussy.png";
import Notty from "../../img/notty.png";
import Matka from "../../img/matka.png";
// import { themeContext } from "../../Context";
const Portfolio = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span className="heading">Some Recent Projects</span>

      {/* slider */}
      <Swiper
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          0:{
            slidesPerView :1,
            spaceBetween : 5,
          },
          480 : {
            slidesPerView :1,
            spaceBetween : 15,
          },
          768 : {
            slidesPerView :2,
            spaceBetween : 15,
          },
          1024:{
            slidesPerView :3,
            spaceBetween : 30,
          }
        }}
      >
        <SwiperSlide>
         <a href="https://mayur5012.github.io/crypco/" rel="noreferrer" target="_blank"><img src={Crypco} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swasthya} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.figma.com/file/bMbrPgNgPKnFrxFp1lNa1S/Bussy?node-id=4%3A413" rel="noreferrer" target="_blank"><img src={Bussy} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mayur5012.github.io/notty/" rel="noreferrer" target="_blank"><img src={Notty} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Matka} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
