import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
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
        <Typography variant="h2" className={classes.heading}  {...props} >
            {children}
        </Typography>
    )
}