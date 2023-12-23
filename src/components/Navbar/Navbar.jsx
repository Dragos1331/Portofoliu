import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Dragoș B.</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>

                        <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Services' >
                            <li>Educație</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Experience' >
                            <li>Experiență</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Portfolio' >
                            <li>Portfoliu</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Skills' >
                            <li>Skills</li>
                        </Link>

                    </ul>
                </div>
                <Link spy={true} smooth={true} to='Contact' >
                    <button className="button n-button">
                        Contact
                    </button>
                </Link>
            </div>
        </div >
    )
}

export default Navbar
