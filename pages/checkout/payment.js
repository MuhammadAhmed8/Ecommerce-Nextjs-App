import React, {useState, useEffect} from 'react';
import {Container, Grid, Paper, Card, Box, CardContent} from '@material-ui/core';
import { IconButton, Typography, Button } from '@material-ui/core';
import OrderSummary from '../../components/Cart/OrderSummary/OrderSummary';
import CartStepper from '../../components/Cart/CartStepper';
import PaymentForm from '../../components/Payment/PaymentForm';
import apiClient from '../../utils/api-client';
import config from '../../utils/config';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';

const api = apiClient();

export default function PaymentPage(props){

    const router = useRouter();

    const [paymentMethod, setPaymentMethod] = useState('612239f9105516c1947cd1f6');

    const handlePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };

    const placeOrder = async (e)=>{
        e.preventDefault();
        axios.defaults.withCredentials = true;
        const response = await axios.put(config.ajaxBase + 'cart/checkout',null, {
            headers:{
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("rht")}`,
            },
           
        });

        console.log(response, "thanks ")
        
        const order = response.data;

        if(!order.draft){
            alert("thanks for ur order")
           // router.push('/checkout/checkout-success');
        }
    }


    return (
        <>
    
        <form onSubmit={placeOrder}>

        <Grid container spacing={2} m={5}>

            <Grid item xs={12}> 
                <br></br>
                <CartStepper activeStep={1}></CartStepper>
                <br></br>
            </Grid>


            <Grid item xs={12} sm={12} md={8} style={{marginBottom:30}}> 
                <Box style={{marginBottom:40, background:"#fff", padding:0}}>
                    <Typography variant="body1" style={{color:"#333"}}>
                            PAYMENT METHODS
                    </Typography>
                    
                </Box>
                

                <div style={{maxWidth:'730px'}}>

                    <PaymentForm handleChange={handlePaymentMethod} value={paymentMethod}></PaymentForm>
                </div>

            </Grid>

            <Grid item xs={12} sm={12} md={4}>
                <Box style={{marginBottom:20, background:"#fff", padding:0}}>
                    <Typography variant="body1" style={{color:"#333"}}>
                            ORDER SUMMARY
                    </Typography>
                    
                </Box>

                <OrderSummary></OrderSummary>

                <div style={{display:'flex', flexDirection:'column', padding:'0 15px',gap:"10px"}}>
                    <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    >
                    Place Order
                    </Button>
                    
                </div>

            </Grid>


        </Grid>
        </form>

        </>
    )

}

