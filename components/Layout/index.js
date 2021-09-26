import { Box, Container } from '@material-ui/core';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({children, ...props}){
    return (
        <Container id="main" mx='auto' style={{maxWidth:"100%",padding: '0px', margin: '0'}}>
            <Box style={{textAlign:"center", padding:15}}>
            Free 2-3 Day Shipping With Any $50+ Order | Save 20% On 3 Items With Code: RENOVA20
            </Box>
            <Navbar/>
                {children}
            <Footer />
        </Container>
            
    )
}