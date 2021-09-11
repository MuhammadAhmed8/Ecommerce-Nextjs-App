import React, {useState, useEffect} from 'react';
import {Container, Grid, Paper, Card, Box, CardContent, Checkbox, FormControlLabel} from '@material-ui/core';
import { IconButton, Typography, Button } from '@material-ui/core';
import OrderSummary from '../../components/Cart/OrderSummary/OrderSummary';
import CartStepper from '../../components/Cart/CartStepper';
import ShippingForm from '../../components/Shipping/ShippingForm';
import {Form, Formik, useFormik} from 'formik';
import apiClient from '../../utils/api-client';
import { useRouter } from 'next/dist/client/router';
import BillingForm from '../../components/Shipping/BillingForm';

const api = apiClient();

function ShippingPage(props){

    const router = useRouter();

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
            phone: '',
            billing_first_name: '',
            billing_last_name: '',
            billing_email: '',
            billing_address_line_1: '',
            billing_address_line_2: '',
            billing_city: '',
            billing_zip_code: '',
            billing_state: '',
            billing_phone: '',
            password: '',
            confirm_password:'',
            create_account: false,
            different_billing: false
        },
        onSubmit: async (values) => {
            try{
                const response = await api.ajax.cart.update({
                    email: values.email,
                    first_name: values.first_name,
                    last_name: values.last_name,
                    mobile: values.phone,
                    create_account: values.create_account,
                    password: values.password,
                    confirm_password: values.password,
                    different_billing: values.different_billing,
                    shipping_address:{
                        address1: values.address_line_1,
                        address2: values.address_line_2,
                        city: values.city,
                        phone: values.phone,
                        postal_code: values.zip_code,
                        state: values.state,
                        full_name: `${values.first_name} ${values.last_name}`
                    },
                    billing_address:{
                        address1: values.billing_address_line_1,
                        address2: values.billing_address_line_2,
                        city: values.billing_city,
                        phone: values.billing_phone,
                        postal_code: values.billing_zip_code,
                        state: values.billing_state,
                        full_name: `${values.billing_first_name} ${values.billing_last_name}`
                    }
                });

                router.push('/checkout/payment');
    
            }
            catch(e){
                console.log('Shipping form update Error!',e)
            }
            
            

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

                    <Grid item xs={12}>

                        <FormControlLabel
                        control={
                        <Checkbox
                        value={formik.values.different_billing}
                        onChange={formik.handleChange}
                        error={formik.touched.different_billing && Boolean(formik.errors.different_billing)}
                        helperText={formik.touched.different_billing && formik.errors.different_billing}
                        name="different_billing"
                        color="primary"
                        />
                        }
                        label="Use a different billing address"
                        />
                    </Grid>
                    <br></br>

                    {formik.values.different_billing &&
                         <BillingForm formik={formik}></BillingForm>
                    }
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