import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Grid, Paper, Card, Box, CardContent} from '@material-ui/core';
import { IconButton, Typography, Button } from '@material-ui/core';
import OrderSummary from '../../components/Cart/OrderSummary/OrderSummary';
import CartStepper from '../../components/Cart/CartStepper';
import PaymentForm from '../../components/Payment/PaymentForm';
import apiClient from '../../utils/api-client';
import config from '../../utils/config';
import { useRouter } from 'next/dist/client/router';
import { useAuth } from '../../components/context/AuthProvider';

const api = apiClient();

export default function PaymentPage(props){

    const router = useRouter();
    const [auth, authDispatch] = useAuth();
    const [paymentMethod, setPaymentMethod] = useState('612239f9105516c1947cd1f6');

    const handlePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };

    const placeOrder = async (e)=>{
        e.preventDefault();
        axios.defaults.withCredentials = true;
        // const response = await axios.put(config.ajaxBase + 'cart/checkout',null, {
        //     headers:{
        //         "Content-type": "application/json",
        //         "Authorization": `Bearer ${localStorage.getItem("rht")}`,
        //     },
           
        // });

        if(auth.paymentToken){
            try{
                const response = await axios.post(config.ajaxBase + "cart/charge", {
                    token: auth.paymentToken
                },{
                    withCredentials: true
                })

            }
            catch(err){
                alert(err.message);
                return;
            }
        }

        fetch('http://localhost:3001/ajax/cart/checkout', {
            method: 'PUT', // or 'PUT'
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("rht")}`
            },
            
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err, "order failed")
        })

        
        // const order = response.data;

        // if(!order.draft){
        //     alert("thanks for ur order")
        //    // router.push('/checkout/checkout-success');
        // }
    }


    return (
        <>
        <Container spacing={100}>
        <form onSubmit={placeOrder}>

        <Grid container spacing={2} m={5}>

            <Grid item xs={12}> 
                <br></br>
                <CartStepper step={3}></CartStepper>
                <br></br>
            </Grid>


            <Grid item xs={12} sm={12} md={8} style={{marginBottom:30}}> 
                <Box style={{marginBottom:20, background:"#fff", padding:15}}>
                    <Typography variant="body1" style={{color:"#333"}}>
                            PAYMENT METHODS
                    </Typography>
                    
                </Box>
                

                <div style={{background:"#fff", padding:20}}>

                    <PaymentForm handleChange={handlePaymentMethod} value={paymentMethod}></PaymentForm>
                </div>

            </Grid>

            <Grid item xs={12} sm={12} md={4}>
                <Box style={{marginBottom:20, background:"#fff", padding:15}}>
                    <Typography variant="body1" style={{color:"#333"}}>
                            ORDER SUMMARY
                    </Typography>
                    
                </Box>

                <OrderSummary></OrderSummary>

                <div style={{display:'flex', flexDirection:'column', padding:'20px',gap:"10px", background:"#fff"}}>
                    <Button
                    size="large"
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
        </Container>
        </>
    )

}

