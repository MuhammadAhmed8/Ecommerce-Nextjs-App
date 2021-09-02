import React from 'react';
import Navbar from './navbar';

export default function Layout({children, ...props}){
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}