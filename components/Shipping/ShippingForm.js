import React from 'react';
import InputField from '../Ui/InputField';
import {Form, Formik} from 'formik';
import { Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>({

    textFieldContainer:{
        display: 'flex',
        flexWrap: 'wrap'
    },

    textField:{
        marginBottom:"14px",
    }
}),
{index:1})

export default function ShippingForm(props){

    const classes = useStyles();

    const handleSubmit = (values,action) => {

    }   

    return (
        <>
        <Formik onSubmit={handleSubmit}>
        
        <Form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <InputField
                    className={classes.textField} 
                    fullWidth
                    label="First Name"
                    name="first_name"
                    id="first_name"
                />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <InputField 
                    className={classes.textField}
                    fullWidth
                    label="Last Name"
                    name="last_name"
                    id="last_name"
                />
            </Grid>
            
        
            <Grid item xs={12}>
                <InputField 
                    className={classes.textField}
                    style={{width:"100%"}}
                    label="Street Address"
                    name="street_address"
                    id="street_address"
                />
            </Grid>

            <Grid item xs={12}>
                <InputField 
                    className={classes.textField}
                    style={{width:"100%"}}
                    label="Street Address"
                    name="street_address"
                    id="street_address"
                />
            </Grid>

            <Grid item xs={12} md={6}>

                <InputField 
                    className={classes.textField}
                    fullWidth
                    label="City"
                    name="city"
                    id="city"
                />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Zip Code"
                name="zip_code"
                id="zip_code"
            />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Province"
                name="province"
                id="province"
            />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Phone Number"
                name="phone"
                id="phone"
            />
            </Grid>

        </Grid>

        </Form>

        </Formik>
        </>
        

    )

}