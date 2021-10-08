import React, {useState} from 'react';
import InputField from '../Ui/InputField';
import { Button, Grid, Input, Link, makeStyles} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useFormik } from 'formik';
import config from "../../utils/config";
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import AuthService from './auth.service';
import Alert from '@material-ui/lab/Alert';

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
        marginTop: 15,
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
    },
    heading:{
        fontSize:'1.5rem',
        letterSpacing:'2px',
        marginBottom:'1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
          }
    },
}),
{index:1})

export default function LoginForm(){

    const classes = useStyles(); 

    const router = useRouter();
    const [auth, authDispatch] = useAuth();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try{
                // call login api
                setError(null);
                axios.post(config.ajaxBase + "register", {
                    email: values.email,
                    password:values.password,
                    first_name: values.first_name,
                    last_name: values.last_name
                })
                .then(({data})=>{
                    AuthService.saveToken(data.jwtToken);
                    authDispatch({
                        type:"setAuthDetails",
                        payload: {
                            ...data.customer_settings
                        }
                    })
                    router.push('/customer/my-account');
                    setSuccess("You are successfully registered. ")
                    
                })
                .catch(e => {
                    setError(e.response.data.message)

                })
            }
            catch(e){
                setError("An unknown error occurred.")
            }
        },
    });
    return (
        <>
    
        <form onSubmit={formik.handleSubmit}>
        <Grid container>
        <h3 className={classes.heading}>Personal Information</h3>

            <Grid item xs={12}>
                <br/>
                <InputField 
                    placeholder="*First Name"
                    name="fname"
                    id="fname" 
                    fullWidth
                    required
                    value={formik.values.first_name}
                    inputProps={{ maxLength: 50 }}
                    onChange={formik.handleChange}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name}
                    style={{ 
                        backgroundColor: '#fff',
                       
                        marginBottom: '10px',
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <br/>
                <InputField 
                    placeholder="*Last Name"
                    name="lname"
                    id="lname" 
                    required
                    fullWidth
                    value={formik.values.last_name}
                    inputProps={{ maxLength: 50 }}
                    onChange={formik.handleChange}
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name}
                    style={{ 
                        backgroundColor: '#fff',
                       
                        marginBottom: '10px',
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <br/><br></br>
                <h3 className={classes.heading}>Sign-in Information</h3>
                <br></br>
                <InputField 
                    placeholder="*Email"
                    name="email"
                    id="email" 
                    type='email'
                    required
                    fullWidth
                    value={formik.values.email}
                    inputProps={{ maxLength: 50 }}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    style={{ 
                        backgroundColor: '#fff',
                       
                        marginBottom: '10px',
                    }}
                />
            </Grid>
            
            <Grid item xs={12}>

                <InputField 
                    placeholder="*Password"
                    name="password"
                    id="password"
                    type='password'
                    fullWidth
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    inputProps={{ minLength: 10, maxLength: 20 }}
                    style={{ 
                        backgroundColor: '#fff',
                        marginBottom: '20px',
                        marginTop: '10px'
                    }}
                />
            </Grid>

            <Grid item xs={12}>

                <InputField 
                    placeholder="*Confirm Password"
                    name="confirm_password"
                    id="confirm_password"
                    type='password'
                    fullWidth
                    required
                    value={formik.values.confirm_password}
                    inputProps={{ minLength: 10, maxLength: 20 }}
                    onChange={formik.handleChange}
                    error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password) || 
                        formik.values.password !== formik.values.confirm_password}
                    helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                    style={{ 
                        backgroundColor: '#fff',
                        marginBottom: '20px',
                        marginTop: '10px'
                    }}
                />
            </Grid>

    
            <Grid item xs={12}>
            <Button
                    type="submit"
                    color="secondary"
                    value="Login"
                    variant="contained"
                    className= { classes.btn }
                >
                    Register
                </Button>
                {
                error && <Alert severity="error" style={{marginTop: 20}}>{error}</Alert>
                }
                {
                    success && <Alert severity="success" style={{marginTop: 20}}>{success}</Alert>
                }
            </Grid>
            
            
        </Grid>
        </form>
        </>

    )
}