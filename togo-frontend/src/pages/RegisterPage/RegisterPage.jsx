import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AutchContext'
import { useNavigate, Link } from 'react-router-dom'
import './RegisterPageStyle.css'

export const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuth, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) navigate('/tasks')
    }, [isAuth])

    const onSubmit = handleSubmit(async (data) => {
        signup(data)
    })


    return (

        <div className='register-page'>
            <h1>Register</h1>
            <div className='register'>

                {
                    registerErrors.map((error, i) => (
                        <div className='register-error' key={i}><p>{error}</p></div>
                    ))
                }
                <form
                    onSubmit={onSubmit} className='register-form' >
                    <input type="text" {...register('name', { required: true })} placeholder='Name' />
                    {errors.name && <p>Name is required</p>}
                    <input type="email" {...register('email', { required: true })} placeholder='Email' />
                    {errors.email && <p>Email is required</p>}
                    <input type="password" {...register('password', { required: true })} placeholder='Password' />
                    {errors.password && <p>Password is required</p>}
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account?<Link className='link-login' to='/login'>Login</Link></p>
            </div>
        </div>
    )
}
