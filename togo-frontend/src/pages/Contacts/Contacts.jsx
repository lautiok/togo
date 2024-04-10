// Contacts.js
import React from 'react';
import './ContactsStyle.css';
import { Footer } from '../../components/Footer/Footer';

export const Contacts = () => {
    return (


        <>
            <div className='contact'>
                <form action="" className='contact-form register-task'>
                    <h1 className='contact-title'>Contact Us</h1>
                    <input type="text" placeholder='Name' className='contact-input' />
                    <input type="text" placeholder='Email' className='contact-input' />
                    <textarea rows="3" placeholder='Message' className='contact-textarea'></textarea>
                    <button className='contact-button'>Send</button>
                </form>
            </div>
            <Footer />
        </>
    );
};
