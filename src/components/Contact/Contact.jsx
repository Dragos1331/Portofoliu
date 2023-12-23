import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { themeContext } from "../../Context.js";
import { useContext } from "react";

import { useRef } from 'react';

function Contact() {

    const form = useRef();


    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_szzg6lr', 'template_a8ehmm9', form.current, '42dC3YIgEiMm06HZ5')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hai să vorbim</span>
                    <span>Contactează-mă</span>
                    <div className="blur s-blur1" style={{ background: "#Abf1ff94" }}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} id='myForm'>
                    <input type="text" name='user_name' className='user' placeholder='Nume' />
                    <input type="email" name='user_email' className='user' placeholder='E-Mail' />
                    <textarea name="message" className='user' placeholder='Mesaj' />
                    <input type="submit" value="Trimite" className='button' />
                    <span>{done && "Mulțumesc pentru mesaj. Voi reveni cât mai repede posibil!"}</span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>

            </div>
        </div>
    )
}


export default Contact;
