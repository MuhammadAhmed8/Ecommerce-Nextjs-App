import React from 'react';
import InputField from '../components/Ui/InputField';
import { Grid, makeStyles, Typography, Button, Container} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useFormik } from 'formik';
import LoginForm from '../components/Auth/LoginForm';
import NewCustomer from '../components/Auth/NewCustomer/NewCustomer';
import { Facebook, FaceOutlined } from '@material-ui/icons'

const useStyles = makeStyles(()=>({

    heading:{
        fontSize:'1.4rem',
        letterSpacing:'2px',
        marginBottom:'1rem'
    },
    title:{
        textAlign: 'center',
        fontSize: '2.2rem',
        fontFamily: 'Times',
        fontWeight: '300'
    }
}),
{index:1})

export default function Login(){

    const classes = useStyles(); 

    const router = useRouter();

    
    return (
        <Container style={{padding:"50px 0"}}>
        <h1 className={classes.title}>My Account Log In</h1>
        <br></br>
        <br></br>
        
        <Grid container style={{ justifyContent: 'space-between' }}>
            
            <Grid item xs={12} md={4} style={{padding:30}}>
                <h3 className={classes.heading}>Log in with 1 Click</h3>
                <FaceOutlined />

                <h3 className={classes.heading}>Returning Customer</h3>
                <Typography variant="body2">If you already have an account, please enter
                your email and password below</Typography>
                <br></br> <br></br>

                <p>Required*</p>

                <LoginForm></LoginForm>
            </Grid>

            <Grid item xs={12} md={6} style={{padding:30}}>
                <NewCustomer></NewCustomer>
            </Grid>

        </Grid>
        </Container>
        
        

    )

}