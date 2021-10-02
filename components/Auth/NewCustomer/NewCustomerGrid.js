import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    imgicon:{
        width: '50px',
        height: '46px',
            [theme.breakpoints.down('sm')]: {
                width: '40px',
                height: '32px'
            }
    },
    btext:{
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.85rem'
        },
    },
    text: {
        fontSize: '0.9rem',
            [theme.breakpoints.down('sm')]:{
                fontSize: '0.7rem'
            }
    }
}),
{index:1})


export default function NewCustomerGrid(props){

    const classes = useStyles(); 

    return(
        <>
            <Grid item xs={2} style={{ padding: '10px 0px', textAlign: 'center' }}>
                <img className={classes.imgicon} src={'img/'+props.img}></img>
            </Grid>

            <Grid item xs={10} >
                <b className={classes.btext}>{props.btext}</b>
                <p className={classes.text}>{props.text}</p>
            </Grid>

        </>
    )
}
