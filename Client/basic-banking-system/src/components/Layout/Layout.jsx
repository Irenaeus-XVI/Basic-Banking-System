import React from 'react'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />

        </>
    )
}