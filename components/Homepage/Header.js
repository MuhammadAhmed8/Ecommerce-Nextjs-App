import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
    },
    headerImage: {
        minWidth: '100%',
        padding: '0',
        margin: '0',
    },
}),
{index:1})



export default function Header(props){

    const classes = useStyles(); 

    return(
        <header className={classes.root}>
            <div className={classes.headerImage}> 
                <img src={props.image}></img>
            </div>

            <br></br>
        </header>
    )
}



