import React from 'react'
import { useAuth } from '../../context/AutchContext'
import usuario from '../../assets/blank-profile-picture-973460_1280.webp'
import './ProfilePageStyle.css'

export const ProfilePage = () => {

    const { user, logout } = useAuth()

    return (
        <div className='profile-page'>
            <h1>Profile Page</h1>
            <div className='profile'>
                <img src={usuario} alt="profile" />
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <p>{user.id}</p>
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
