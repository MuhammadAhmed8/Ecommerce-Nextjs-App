import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: '2rem',
        fontFamily: 'Times',
        lineHeight: '2.5rem',
        fontWeight: '500',
        padding: '10px 0px 20px 0px',
        textAlign: 'center',
    }
}),
{index:1})

export default function TitleHeading({children, ...props}){
    const classes = useStyles(); 

    return (
        <h1 className={classes.heading}  {...props} >
            {children}
        </h1>
    )
}