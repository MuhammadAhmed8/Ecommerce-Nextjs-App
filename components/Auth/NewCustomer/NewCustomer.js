import React from 'react';
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import NewCustomerGrid from './NewCustomerGrid';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
    heading:{
        fontSize:'1.4rem',
        letterSpacing:'2px',
        marginBottom:'1rem'
    },
    grid:{
        marginTop: '20px',
        marginBottom: '20px'
    },
}),
{index:1})


export default function NewCustomer(){

    const classes = useStyles(); 

    return(
        <div>
            <h3 className={classes.heading}>New Customers</h3>
            <Typography variant="body2">
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
                style={{ padding: '8px 20px', borderRadius: '0px' }}
            >
                Create an account
            </Button>
        </div>
    )
}
