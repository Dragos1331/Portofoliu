import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

function Footer() {
    return (
        <div className="footer" id='Footer'>
            <img src={Wave} alt="footer" style={{ width: '100%' }} />
            <div className="f-content">
                <span>Contact</span>
                <span>E-Mail: <a href="mailto:bdm_dra@yahoo.com">bdm_dra@yahoo.com</a></span>
                <span>Telefon: <a href="tel:+4 0766 936 275">+40766-936-275</a></span>
                <div className="f-icons">
                    <a href="https://github.com/Dragos1331"><Github color='white' size='3rem' /></a>
                    <a href="https://www.linkedin.com/in/dragos-barang%C4%83-742782190/"><Linkedin color='white' size='3rem' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
