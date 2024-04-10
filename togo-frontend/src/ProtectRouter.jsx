import React from 'react'
import { useAuth } from './context/AutchContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectRouter = () => {
    const { loading, isAuth } = useAuth()

    if (loading) return <p>Loading...</p>
    if (!loading && !isAuth) return <Navigate to="/login" replace />

    return <Outlet />
}
