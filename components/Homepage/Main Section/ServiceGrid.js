import React from 'react';
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    image: {
        width: '120px',
        height: '120px',
        objectFit: 'contain',
        marginBottom: '12px'
    },
    text: {
        fontSize: '1.15rem',
        marginBottom: '10px'
    }
}),
{index:1})


export default function ServiceGrid(props){    
    const classes = useStyles(); 

    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <div>
                    <img className={classes.image} src={'img/' + props.img} />
                    <p className={classes.text}>{props.text}</p>
                </div>
            </Grid>
        </>
    )
}