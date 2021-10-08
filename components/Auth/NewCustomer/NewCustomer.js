import React from 'react';
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import NewCustomerGrid from './NewCustomerGrid';
import { red } from '@material-ui/core/colors';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
    heading:{
        fontSize:'1.4rem',
        letterSpacing:'2px',
        marginBottom:'1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
          }
    },
    grid:{
        marginTop: '20px',
        marginBottom: '20px'
    },

    btn: {
        padding: '8px 10px',
        width:240,
        height: 50,
        borderRadius: '0px',
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            width:200,
            height: 50
          }
    }
}),
{index:1})


export default function NewCustomer(){

    const classes = useStyles(); 
    const router = useRouter();

    return(
        <div>
            <h3 className={classes.heading}>New Customers</h3>
            <Typography variant="body1" style={{marginBottom:20}}>
                Creating an account is easy. Just fill in the form below and enjoy the benefits of having an account.
            </Typography>

            <Grid className={classes.grid} container spacing={2}>
                <NewCustomerGrid 
                    btext='Save your information'
                    text='Automatic loyalty points each time you make a purchase.'
                    img='basket.png'
                />

                <NewCustomerGrid 
                    btext='Get Rewards'
                    text='With our secure setup, you can zoom through billing and shipping every time.'
                    img='per-tag.png'
                />
                
                <NewCustomerGrid 
                    btext='A BEAUTY BONUS'
                    text='Sign up now and receive a special gift as our thanks.'
                    img='star-card.png'
                />
            </Grid>

            <br></br>

            <Button
                type="submit"
                color="secondary"
                value="Create an account"
                variant="contained"
                className={classes.btn}
                onClick={()=>router.push('register')}
            >
                Create an account
            </Button>
        </div>
    )
}
