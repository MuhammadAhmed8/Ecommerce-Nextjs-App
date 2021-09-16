import React from 'react';
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    headingOverlay: {
        width: '70%',
        maxHeight: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        backgroundColor: 'rgba(253, 253, 253, 0.8)',
        zIndex: 5,
        transform: 'translate(-50%, -50%)',
        dosplay: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        alignItems: 'center',
        padding: '20px'
    },
    imageDiv: {
        height: '30rem',
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    grid: {
        position: 'relative'
    },
    headingText: {
        fontSize: '2rem',
        fontFamily: 'Times',
        padding: '20px',
        fontWeight: '300'
    }
}),
{index:1})


export default function BeautyGrid(props){    
    const classes = useStyles(); 

    return (
        <Grid className={classes.grid} item xs={12} sm={6}>
            <div className={classes.imageBox}>
                <img className={classes.image} src={'img/' + props.img} />
            </div>

            <div className={classes.headingOverlay}>
                <h3 className={classes.headingText}>{props.heading}</h3>
                {props.children}
            </div>
        </Grid>
    )
}