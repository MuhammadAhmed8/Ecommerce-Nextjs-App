import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grid: {
        backgroundColor: '#fff',
    },
    image: {
        maxHeight: '360px',
        [theme.breakpoints.down(960)]: {
            maxHeight: 'fit-content',
            width: '100%' 
          }
    },
    heading: {
        fontSize: '1.8rem',
        fontFamily: 'Times',
        lineHeight: '2.5rem',
        fontWeight: '500',
        padding: '10px 0px 20px 0px'
    },
    paragraph: {
        fontSize: '1rem',
        lineHeight: '1.8rem',
    },
    ingredients: {
        textAlign: 'center',
        padding: '5px',
    }
}),
{index:1})

export default function ResultsGrid(props){
    const classes = useStyles(); 
    return(
        <>
            <Grid className={classes.grid} container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <img className={classes.image} src={props.img} />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <h2 className={classes.heading} >
                        {props.heading}
                    </h2>

                    <p  className={classes.paragraph}>
                        {props.paragraph}
                    </p>
                    <ul className={classes.ingredients}>
                        {props.advantages && props.advantages.map((a)=> <li>{a}</li>)}
                    </ul>

                </Grid>
            </Grid>
        </>
    )
}
