import React from 'react';
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'contain',
        marginBottom: '12px',
            [theme.breakpoints.down(960)]: {
                width: '60px',
                height: '60px'
            }
    },
    text: {
        fontSize: '1.15rem',
        marginBottom: '10px',
            [theme.breakpoints.down(960)]: {
                fontSize: '0.8rem',
            }
    }
}),
{index:1})


export default function ServiceGrid(props){    
    const classes = useStyles(); 

    return (
        <>
            <Grid item xs={6} sm={6} md={3}>
                <div>
                    <img className={classes.image} src={'img/' + props.img} />
                    <p className={classes.text}>{props.text}</p>
                </div>
            </Grid>
        </>
    )
}