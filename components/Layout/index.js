import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from './navbar';

export default function Layout({children, ...props}){
    return (
        <Container id="main" mx='auto' style={{maxWidth:"1200px"}}>
            <Navbar/>
            {children}
        </Container>
            
    )
}