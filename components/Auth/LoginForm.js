import React from 'react';
import InputField from '../Ui/InputField';
import { Button, Grid, makeStyles} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useFormik } from 'formik';

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

export default function LoginForm(){

    const classes = useStyles(); 

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try{
                // call login api
                
                router.push('/checkout/payment');
    
            }
            catch(e){
                console.log('Login Error!',e)
            }
            
            

        },
    });

    return (
        <>
    
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <InputField
                    className={classes.textField} 
                    fullWidth
                    label="Email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
            </Grid>
            
            <Grid item xs={12}>
                <InputField 
                    className={classes.textField}
                    fullWidth
                    label="Password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
            </Grid>

            <Grid item xs={12}>
            <Button
                    type="submit"
                    color="secondary"
                    value="Login"
                    variant="contained"
                >
                    Login
                </Button>
            </Grid>

        </Grid>

        

        </>
        

    )

}