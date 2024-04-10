import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderStyle.css'
import { useAuth } from '../../context/AutchContext'
import { HeaderMovile } from './HeaderMovile'
export const Header = () => {

    const { isAuth } = useAuth()

    return (
        <>
            <header>
                <div className='logo'>
                    <h1><Link to={isAuth ? '/tasks' : '/'}>togo</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutus'>About us</Link></li>
                        <li><Link to='/tasks'>Tasks</Link></li>
                        <li><Link to='/notes'>Notes</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
                <div className='login-ingress'>
                    {isAuth ? (<p className='ingress'><Link className='linkogin' to='/profile'><i className="bi bi-person-fill"></i></Link></p>) : (
                        <p className='ingress'><Link className='linkogin' to='/login'><i className="bi bi-box-arrow-in-right"></i></Link></p>)}
                </div>
                <div className='header-movile-container'>
                </div>
            </header>
            <div className='header-movile-container'>
                <HeaderMovile />
            </div>
        </>

    )
}
