import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grid: {
        backgroundColor: '#fff',
        height: '100%',
        paddingRight: '25px',
            [theme.breakpoints.down('sm')]: {
                paddingRight: '0px'
            }
    },
    image: {
        padding: '20px',
        height: '100%',
        objectFit: 'cover',
        [theme.breakpoints.down(960)]: {
            maxHeight: 'fit-content',
            width: '100%',
            padding: '10px'
          }
    },
    imageContainer: {
        height: '480px',
            [theme.breakpoints.down(960)]: {
                maxHeight: 'fit-content',
                width: '100%',
                height: 'auto',
            }
    },
    textContainer: {
        padding: '5px',
            [theme.breakpoints.down('sm')]: {
                padding: '0px 10px'
            }
    },
    heading: {
        fontSize: '2.3rem',
        fontFamily: 'Times',
        lineHeight: '2.8rem',
        fontWeight: '500',
        padding: '10px 0px 20px 0px',
            [theme.breakpoints.down(960)]: {
                fontSize: '1.5rem',
                lineHeight: '2.2rem',
                padding: '10px 0px'
            }
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.9rem',
            [theme.breakpoints.down(960)]: {
                fontSize: '0.9rem',
                lineHeight: '1.4rem',
            }
    },
    ingredients: {
        textAlign: 'center',
        padding: '5px',
        fontSize: '1.2rem',
        lineHeight: '2rem',
            [theme.breakpoints.down(960)]: {
                fontSize: '0.9rem',
                lineHeight: '1.4rem',
            }
    }
}),
{index:1})

export default function ResultsGrid(props){
    const classes = useStyles(); 
    return(
        <>
            <Grid className={classes.grid} container>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.imageContainer}>
                        <img className={classes.image} src={props.img} />
                    </div>
                </Grid>

                <Grid item className={classes.textContainer} xs={12} sm={12} md={6}>
                    <h2 className={classes.heading} >
                        {props.heading}
                    </h2>

                    <p  className={classes.paragraph}>
                        {props.paragraph}
                    </p>
                    <ul className={classes.ingredients}>
                        {props.advantages && props.advantages.map((a, i)=> <li key={i}>{a}</li>)}
                    </ul>

                </Grid>
            </Grid>
        </>
    )
}
