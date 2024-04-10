import React from 'react'
import { Link } from 'react-router-dom'
import persons from '../../assets/mujer-joven-dibujos-animados-ilustracion-3d-detras-personaje-pared_40876-3090-removebg-preview.png'
import personstask from '../../assets/mujer-task.png'
import login from '../../assets/login.png'
import draganddrop from '../../assets/draganddrop.png'
import { Footer } from '../../components/Footer/Footer'
import './HomePageStyle.css'
export const HomePage = () => {
    return (

        <>
            <main>
                <div className='hero'>
                    <div className='hero-des'>
                        <p className='hero-arriba'>Organize your tasks</p>
                    </div>
                    <div className='hero-logo'>
                        <h1>togo</h1>
                    </div>
                </div>

                <div className='description'>
                    <div className='izq'>
                        <h2>What is togo?</h2>
                        <p>togo is a task management tool that helps you organize <br /> your tasks and keep track of your progress.</p>
                        <Link className='register-description' to='/register'>Get Started</Link>
                    </div>
                    <div className='der'>
                        <img src={persons} alt="togo" />
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card-home'>
                        <img src={personstask} alt="togo" />
                        <h3>Organize your tasks</h3>
                    </div>
                    <div className='card-home'>
                        <img src={draganddrop} alt="togo" />
                        <h3>Drag and drop</h3>
                    </div>
                    <div className='card-home'>
                        <img src={login} alt="togo" />
                        <h3>secure registration</h3>
                    </div>
                </div>
            </main >
            <Footer />
        </>

    )
}
