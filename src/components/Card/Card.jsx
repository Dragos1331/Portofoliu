import React from 'react'
import './Card.css'

function Card({ icon, heading, detail }) {
    return (
        <div className="card">
            <img src={icon} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            {/* <button className="c-button">DETALII</button> */}
        </div>
    )
}

export default Card
