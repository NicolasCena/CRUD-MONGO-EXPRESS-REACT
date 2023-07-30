import React from 'react'
import { useAuth } from './hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const { isLoggedin } = useAuth();

    if(!isLoggedin) return <Navigate to={'/'} replace />

  return (
    <Outlet />
  )
}
