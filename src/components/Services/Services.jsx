import React from 'react';
import './Services.css';
import university from '../../img/university.png';
import ztm from '../../img/ztm.png';
import aws from '../../img/aws.png';
import Card from '../Card/Card';
import Resume from './CV QA Dragos Baranga.pdf';
import { themeContext } from "../../Context.js";
import { useContext } from "react";

function Services() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Educație și</span>
                <span>formare profesională</span>
                <span>“Live as if you were to die tomorrow. Learn as if you were to live forever.”</span>
                <span>― Mahatma Gandhi</span>
                <a href={Resume} download>
                    <button className="button s-button"> Descarcă CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* right side */}
            <div className="cards mobile-spacing">
                <div style={{ left: '14rem' }}>
                    <Card
                        icon={university}
                        heading={'Facultate'}
                        detail={'Universitatea Maritimă din Constanța, specializarea inginerie electromecanică'}
                    />
                </div>

                {/* second card */}
                <div className='mobile-spacing' style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        icon={ztm}
                        heading={"ZTM Academy"}
                        detail={"Front end development, AWS, Software testing, Linux, Python"}
                    />
                </div>

                {/* third card */}
                <div className='mobile-spacing' style={{ top: "21rem", left: "16rem" }}>
                    <Card
                        icon={aws}
                        heading={"AWS"}
                        detail={"Certificare AWS Cloud Practitioner"}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

            </div>
        </div>
    )
}

export default Services
