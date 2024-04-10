import React from 'react'
import { Link } from 'react-router-dom'
import './FooterStyle.css'

export const Footer = () => {
    return (
        <footer>
            <div className='logo'>
                <h1>togo</h1>
            </div>
            <div className='login-footer'>
                <Link className='login-footer' to='/login'>Login</Link>
                <Link className='register-footer' to='/register'>Register</Link>
            </div>
        </footer>
    )
}
