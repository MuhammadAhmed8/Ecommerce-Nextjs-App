import React from 'react';
import InputField from '../components/Ui/InputField';
import { Grid, makeStyles, Typography} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useFormik } from 'formik';
import LoginForm from '../components/Auth/LoginForm';

const useStyles = makeStyles(()=>({

    heading:{
        fontSize:'1.4rem',
        letterSpacing:'2px',
        marginBottom:'1rem'
    }
}),
{index:1})

export default function Login(){

    const classes = useStyles(); 

    const router = useRouter();

    
    return (
        <>
    
        <Grid container spacing={2}>
            
            <Grid item xs={12} md={6}>
                <h3 className={classes.heading}>Returning Customer</h3>
                <Typography variant="body2">If you already have an account, please enter
                your email and password below</Typography>
                <br></br> <br></br>

                <LoginForm></LoginForm>
            </Grid>

            <Grid item xs={12} md={6}>

            </Grid>

        </Grid>

        </>
        

    )

}