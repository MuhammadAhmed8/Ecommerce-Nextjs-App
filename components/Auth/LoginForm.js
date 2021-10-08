import React from 'react';
import InputField from '../Ui/InputField';
import { Button, Grid, Input, Link, makeStyles} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useFormik } from 'formik';
import config from "../../utils/config";
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import AuthService from './auth.service';

const useStyles = makeStyles((theme)=>({

    textFieldContainer:{
        display: 'flex',
        flexWrap: 'wrap'
    },

    textField:{
        marginBottom:"10px",
        padding: '0px'
    },
    btn: {
        padding: '8px 30px',
        width:150,
        height: 50,
        borderRadius: '0px',
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            width:130,
            height: 40
          }
    }
}),
{index:1})

export default function LoginForm(){

    const classes = useStyles(); 

    const router = useRouter();
    const [auth, authDispatch] = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try{
                // call login api

                axios.post(config.ajaxBase + "login", {
                    email: values.email,
                    password:values.password
                })
                .then(({data})=>{
                    if(data.authenticated){
                        AuthService.saveToken(data.jwtToken);
                        authDispatch({
                            type:"setAuthDetails",
                            payload: {
                                ...data.customer_settings
                            }
                        })
                        router.push('/customer/my-account');
                    }
                })
            }
            catch(e){
                console.log('Login Error!',e)
            }
        },
    });
    return (
        <>
    
        <form onSubmit={formik.handleSubmit}>
        <Grid container>
            <Grid item xs={12}>
                <br/>
                <InputField 
                    placeholder="*Email"
                    name="email"
                    id="email" 
                    disableUnderline
                    type='email'
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    style={{ 
                        backgroundColor: '#fff',
                       
                        marginBottom: '10px',
                    }}
                />

                {/* <InputField
                    className={classes.textField} 
                    fullWidth
                    label="*Email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    style={{ 
                        backgroundColor: '#fff',
                    }}
                    InputProps={{
                        //disableUnderline: true
                    }}
                />   */}
            </Grid>
            
            <Grid item xs={12}>
                {/* <InputField 
                    className={classes.textField}
                    fullWidth
                    label="*Password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    style={{ 
                        backgroundColor: '#fff',
                    }}
                    InputProps={{
                        //disableUnderline: true
                    }}
                /> */}

                <InputField 
                    placeholder="*Password"
                    name="password"
                    id="password"
                    disableUnderline
                    type='password'
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    style={{ 
                        backgroundColor: '#fff',
                        marginBottom: '20px',
                        marginTop: '10px'
                    }}
                />
            </Grid>

            <Grid item xs={12}>
                <div style={{marginBottom: 20, paddingLeft: 3}}>
                <Link>Forget Password?</Link>
                </div>
            </Grid>

            <Grid item xs={12}>
            <Button
                    type="submit"
                    color="secondary"
                    value="Login"
                    variant="contained"
                    className= { classes.btn }
                >
                    Log in
                </Button>
            </Grid>

        </Grid>
        </form>
        </>

    )
}