import React from 'react'
import './Skills.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import frontend from '../../img/fronend.png';
import Languages from '../../img/Languages.png';
import aws from '../../img/aws.png';
import communication from '../../img/communication.png';


function Skills() {
    const domains = [
        {
            img: frontend,
            title: "Front-End",
            skills: "HTML, CSS, JavaScript, React"
        },
        {
            img: Languages,
            title: "Languages",
            skills: "Python, GitHub, Selenium, Testing"
        },
        {
            img: aws,
            title: "DevOps",
            skills: "Amazon AWS, Linux, Docker, Jenkins"
        },
        {
            img: communication,
            title: "Soft Skills",
            skills: "Problem solving, Teamwork, Time Management, Stress Management"
        }

    ]
    return (


        <div className="s-wrapper" id='Skills'>
            <div className="s-heading">
                <span>Competențe, </span>
                <span>Skills </span>
                <span>și nu numai...</span>
                <div className="blur s-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur s-blur2" style={{ background: "skyblue" }}></div>
            </div>

            {/* slider */}
            <Swiper spaceBetween={10} slidesPerView={1.5} grabCursor={true}  >
                {domains.map((domain, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="skill">
                                <img src={domain.img} alt="" />
                                <span>{domain.title}</span>
                                <span>{domain.skills}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div >
    )
}

export default Skills;
