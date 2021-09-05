import React, {useState, useEffect} from 'react';
import {Container, Grid, Paper, Card, Box, CardContent} from '@material-ui/core';
import { IconButton, Typography, Button } from '@material-ui/core';
import OrderSummary from '../../components/Cart/OrderSummary/OrderSummary';
import CartStepper from '../../components/Cart/CartStepper';
import ShippingForm from '../../components/Shipping/ShippingForm';
import {Form, Formik, useFormik} from 'formik';

function ShippingPage(props){

    
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            address_line_1: '',
            address_line_2: '',
            city: '',
            zip_code: '',
            state: '',
            phone: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
      

    return (
        <>
    
        <form onSubmit={formik.handleSubmit}>

        <Grid container spacing={2} m={5}>

            <Grid item xs={12}> 
                <br></br>
                <CartStepper activeStep={1}></CartStepper>
                <br></br>
            </Grid>


            <Grid item xs={12} sm={12} md={8} style={{marginBottom:30}}> 
                <Box style={{marginBottom:40, background:"#fff", padding:0}}>
                    <Typography variant="body1" style={{color:"#333"}}>
                            SHIPPING INFORMATION
                    </Typography>
                    
                </Box>
                

                <div style={{maxWidth:'730px'}}>

                    <ShippingForm formik={formik} ></ShippingForm>
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
                    Proceed to Payment
                    </Button>
                    
                </div>

            </Grid>


        </Grid>
        </form>

        </>
    )

}

export default ShippingPage;