import React from 'react'
import { Outlet } from 'react-router-dom';
import Student from './student';

function RootLayout() {
    return (
        <div>
            <Student />
            <Outlet />
        </div>
    )
}

export default RootLayout
