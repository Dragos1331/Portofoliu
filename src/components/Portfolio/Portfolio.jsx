import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Faceify from '../../img/faceify.png';
import Zest from '../../img/zest.png';
import faceapp from '../../img/faceapp.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import { themeContext } from "../../Context.js";
import { useContext } from "react";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Proiecte recente</span>
            <span>Portofoliu</span>

            {/* slider */}
            <Swiper spaceBetween={80} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
                <SwiperSlide className='slider-portofoliu'>
                    <a href="https://dragos1331.github.io/faceify/"><img src={Faceify} alt="faceify website" /></a>
                </SwiperSlide>
                <SwiperSlide className='slider-portofoliu'>
                    <a href="https://dragos1331.github.io/zest/"><img src={Zest} alt="zest website" /></a>
                </SwiperSlide>
                <SwiperSlide className='slider-portofoliu'>
                    <a href="https://dragos1331.github.io/faceapp/"><img src={faceapp} alt="zest website" /></a>
                </SwiperSlide>
                {/* <SwiperSlide className='slider-portofoliu'>
                    <img src={MusicApp} alt="" />
                </SwiperSlide> */}


            </Swiper>
        </div >
    )
}

export default Portfolio
