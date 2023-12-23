import React from 'react'
import './Works.css'
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import React2 from '../../img/react.png';
import CSS from '../../img/css.png';
import Javascript from '../../img/java-script.png';
import { themeContext } from "../../Context.js";
import { useContext } from "react";
import { Link } from 'react-scroll';

function Works() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Proiectele și</span>
                <span>realizările personale</span>
                <span>E-Commerce Store pe platforma Shopify</span>
                <span>Proiecte in React</span>
                <span>Proiecte in HTML, CSS si Javascript</span>

                <Link spy={true} smooth={true} to='Footer' >
                    <button className="button s-button">Hai să vorbim</button>
                </Link>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Shopify} alt="shopify logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="facebook logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={CSS} alt="CSS logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Javascript} alt="Javascript logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={React2} alt="react logo" />
                    </div>
                </div>
                {/* background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>

        </div>
    )
}

export default Works
