import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    imgicon:{
        width: '60px',
        height: '50px',
    },
    btext:{
        fontSize: '1.1rem'
    },
}),
{index:1})


export default function NewCustomerGrid(props){

    const classes = useStyles(); 

    return(
        <>
            <Grid item xs={2}>
                <img className={classes.imgicon} src={'img/'+props.img}></img>
            </Grid>

            <Grid item xs={10}>
                <b className={classes.btext}>{props.btext}</b>
                <p>{props.text}</p>
            </Grid>

        </>
    )
}
