import React from 'react';
import InputField from '../components/Ui/InputField';
import { Grid, makeStyles, Typography, Button, Container} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useFormik } from 'formik';
import RegisterForm from '../components/Auth/RegisterForm';
import { Facebook, FaceOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme)=>({

    title:{
        textAlign: 'center',
        fontSize: '2.4rem',
        fontFamily: 'Times',
        fontWeight: '300',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.9rem',
          }
    }
}),
{index:1})

export default function Login(){

    const classes = useStyles(); 

    const router = useRouter();

    
    return (
        <Container style={{padding:"50px 0"}}>
        <h1 className={classes.title}>Create New Customer Account</h1>
        <br></br>
        <br></br>
        
        <Grid container style={{justifyContent:'center'}}>
            
            <Grid item xs={12} md={6} style={{padding:10}}>
                
                <RegisterForm/>
            </Grid>
        </Grid>
        </Container>
        
        

    )

}