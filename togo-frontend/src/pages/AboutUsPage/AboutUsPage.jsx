import React from 'react'
import './AboutUsPage.css'
import { Footer } from '../../components/Footer/Footer'

export const AboutUsPage = () => {
    return (

        <>
            <div className='aboutUS'>
                <div className='contenedor-about'>
                    <div className='contenedor-logo'>
                        <h1>togo</h1>
                    </div>
                    <div className='contenedor-text'>
                        <p>Togo offers a streamlined and intuitive interface designed to make task management a breeze. <br />
                            Whether you're juggling multiple projects or simply trying to stay on top of your daily to-do list, <br />
                            Togo provides all the features you need to stay organized and productive.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
