import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    headerImage: {
        minWidth: '100%',
        padding: '0',
        margin: '0',
        backgroundImage: `url("/img/header_bg.png")`,
        height: '660px',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginBottom: '40px',
            [theme.breakpoints.down('sm')]: {
                height: '240px',
                backgroundPosition: 'right'
            }

    },
}),
{index:1})



export default function Header(props){

    const classes = useStyles(); 

    return(
        <header className={classes.root}>
            <div className={classes.headerImage}> 
            </div>
        </header>
    )
}



