import React, {useState, useEffect} from 'react';
import {Container, Grid,makeStyles , Box} from '@material-ui/core';
import { IconButton, Typography, Button } from '@material-ui/core';
import CartItem from '../components/Cart/CartItem/CartItem';
import OrderSummary from '../components/Cart/OrderSummary/OrderSummary';
import CartStepper from '../components/Cart/CartStepper';
import ShippingForm from '../components/Shipping/ShippingForm';
import { useCartContext } from '../components/context/CartProvider';
import { useRouter } from 'next/dist/client/router';
import PopularProductsContainer from '../components/MoreProducts/PopularProductsContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme)=>({
    titleContainer: {
        marginBottom:20, 
        background:"#fff", 
        padding:"10px 15px",
            [theme.breakpoints.down('sm')]: {
                padding: '5px 15px'
            }
    },
    title: {
        color:"#333", 
        fontSize: '1.1rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem'
            }
    },
    btnText: {
        fontWeight: '600', 
        fontFamily: 'Helvetica', 
        textTransform: 'capitalize', 
        padding: '12px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.75rem',
                padding: '8px',
            }
    }
}),
{index:1})

function Cart(props){

    const classes = useStyles();

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

    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));


    return (
        <>
    
        <Container disableGutters={true}>
        <Grid container direction={largeScreen ? "row": "column"} spacing={2} style={{paddingBottom:50}}>

            <Grid item xs={12}> 
                <br></br>
                <CartStepper step={1}></CartStepper>
                <br></br>
            </Grid>

            <Grid item xs={12} sm={12} md={8}> 
                <Box className={classes.titleContainer}>
                    <p className={classes.title} >
                            YOUR CART
                    </p>
                    
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
                <Box className={classes.titleContainer}>
                    <p className={classes.title} >
                            ORDER SUMMARY
                    </p>
                    
                </Box>

                <OrderSummary></OrderSummary>
                
                <div style={{display:'flex', flexDirection:'column', padding:'16px',gap:"10px", background:"#fff"}}>
                    <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={proceedToCheckout}
                        className={classes.btnText}
                    >
                    Checkout
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        onClick={handleContinueShopping}
                        className={classes.btnText}
                    >
                    Continue Shopping
                    </Button>
                </div>
                

            </Grid>

        </Grid>
        </Container>
                    
        <div style={{background:"#fff", padding:"40px 0"}}>
            <Container spacing={100}>
            <PopularProductsContainer></PopularProductsContainer>
            </Container>

        </div>

        </>
    )

}

export default Cart;