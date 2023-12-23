import React from 'react'
import './Intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.jpg';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context.js";
import { useContext } from "react";
import { Link } from 'react-scroll';

function Intro() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Salut! Eu sunt</span>
                    <span>Dragoș Barangă</span>
                    <span>Inginer pasionat de funcționarea, întreținerea și îmbunătățirea lucrurilor. Experiență în inginerie electromecanică pe nave de pasageri, dezvoltând cunoștințe tehnice și abilități într-un mediu de echipă. Întotdeauna învăț de la cei mai experimentați și caut mereu noi oportunități.</span>
                </div>

                <Link spy={true} smooth={true} to='Footer' >
                    <button className="button i-button">Hai să vorbim</button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/Dragos1331"><img src={GitHub} alt="github icon" /></a>
                    <a href="https://www.linkedin.com/in/dragos-barang%C4%83-742782190/"><img src={LinkedIn} alt="linkedin icon" /></a>
                </div>
            </div>


            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src="" alt="" />
                <div style={{ top: '-4%', left: '68%' }} className='floating-div'>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Development' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }} className='floating-div'>
                    <FloatingDiv image={thumbup} txt1='Inginer' txt2='Electromecanic' />
                </div>

                {/* blur divs */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>
    )
}

export default Intro
