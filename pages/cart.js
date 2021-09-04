import React, {useState, useEffect} from 'react';
import {Container, Grid, Paper, Card, Box, CardContent} from '@material-ui/core';
import { IconButton, Typography, Button } from '@material-ui/core';
import CartItem from '../components/Cart/CartItem/CartItem';
import OrderSummary from '../components/Cart/OrderSummary/OrderSummary';
import CartStepper from '../components/Cart/CartStepper';
import ShippingForm from '../components/Shipping/ShippingForm';
import { useCartContext } from '../components/context/CartProvider';

function Cart(props){

    const [cart, setCart] = useCartContext();


    return (
        <>
    
        <Container spacing={100}>
        <Grid container spacing={2} m={5}>

            <Grid item xs={12}> 
                <br></br>
                <CartStepper></CartStepper>
                <br></br>
            </Grid>

            <Grid item xs={12} sm={8} md={8}> 
                <Box style={{marginBottom:20, background:"#fff", padding:"8px 15px"}}>
                    <Typography variant="body1" style={{color:"#333"}}>
                            YOUR CART
                    </Typography>
                    
                </Box>
                <div>
                    {
                        cart ? cart.items.map((item)=>{
                            return <CartItem key={item.id} item={item} ></CartItem>
                        }) :
                        <p style={{marginBottom: 50, textAlign:'center'}} >
                                No Items in your cart. Please add some!
                        </p>
                    }
                 
                </div>

                <div>
                    <ShippingForm></ShippingForm>
                </div>

            </Grid>

            <Grid item xs={12} sm={4} md={4}>
                <Box style={{marginBottom:20, background:"#fff", padding:"8px 15px"}}>
                    <Typography variant="body1" style={{color:"#333"}}>
                            ORDER SUMMARY
                    </Typography>
                    
                </Box>

                <OrderSummary></OrderSummary>
            </Grid>
        </Grid>
        </Container>
        </>
    )

}

export default Cart;