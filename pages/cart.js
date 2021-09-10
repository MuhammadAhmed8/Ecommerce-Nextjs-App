import React, {useState, useEffect} from 'react';
import {Container, Grid, Paper, Card, Box, CardContent} from '@material-ui/core';
import { IconButton, Typography, Button } from '@material-ui/core';
import CartItem from '../components/Cart/CartItem/CartItem';
import OrderSummary from '../components/Cart/OrderSummary/OrderSummary';
import CartStepper from '../components/Cart/CartStepper';
import ShippingForm from '../components/Shipping/ShippingForm';
import { useCartContext } from '../components/context/CartProvider';
import { useRouter } from 'next/dist/client/router';
import PopularProductsContainer from '../components/MoreProducts/PopularProductsContainer';

function Cart(props){

    const [cart, setCart] = useCartContext();
    const router = useRouter();

    const handleContinueShopping = (e)=>{
        e.preventDefault();
        router.push('/products')
    }

    const proceedToCheckout = (e)=>{
        e.preventDefault();
        router.push('/checkout/shipping');

    }

    return (
        <>
    
        <Container spacing={100}>
        <Grid container spacing={2} m={5}>

            <Grid item xs={12}> 
                <br></br>
                <CartStepper></CartStepper>
                <br></br>
            </Grid>

            <Grid item xs={12} sm={12} md={8}> 
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


            </Grid>

            <Grid item xs={12} sm={12} md={4}>
                <Box style={{marginBottom:20, background:"#fff", padding:"8px 15px"}}>
                    <Typography variant="body1" style={{color:"#333"}}>
                            ORDER SUMMARY
                    </Typography>
                    
                </Box>

                <OrderSummary></OrderSummary>
                
                <div style={{display:'flex', flexDirection:'column', padding:'0 15px',gap:"10px"}}>
                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={proceedToCheckout}
                    >
                    CHECKOUT
                    </Button>
                    <Button
                    variant="contained"
                    onClick={handleContinueShopping}
                    >
                    CONTINUE SHOPPING
                    </Button>
                </div>
                

            </Grid>

            <Grid item xs={12}>
                <PopularProductsContainer></PopularProductsContainer>
            </Grid>
        </Grid>
        </Container>
        </>
    )

}

export default Cart;