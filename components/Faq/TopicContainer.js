import { Grid, makeStyles, withStyles, Button, TextField, InputAdornment } from "@material-ui/core";
import TitleHeading from "../Ui/TitleHeading";
import TopicItem from "./TopicItem";


const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
        backgroundColor: '#fff',
        margin: '0px',
        padding: '40px'
    },
    label: {
        border: '3px solid #C4C4C4',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.8rem',
        color: '#333',
        '&:hover': {
            color: 'red'
        },
        padding: '30px 0px'
    },
    img: {
        marginBottom: '10px',
        width: '50px',
        height: 'auto',
        objectFit: 'contain',
        filter: 'brightness(20%)',
        opacity: '0.3',
        display: 'block',
    },
    grid: {
        maxWidth: '800px',
        margin: 'auto !important',
    }
}),
{index:1})

export default function TopicContainer(){
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <TitleHeading>Select your Topic</TitleHeading>

            <Grid className={classes.grid} container spacing={2}>
                <TopicItem 
                    img='icon - order online.png' 
                    title='ORDER ONLINE'
                />

                <TopicItem 
                    img='Group 103.png' 
                    title='Shipping & Return'
                />

                <TopicItem 
                    img='icon - my account.png' 
                    title='My Account'
                />

                <TopicItem 
                    img='icon - our products.png' 
                    title='Our Products'
                />

                <TopicItem 
                    img='icon - our brand.png' 
                    title='Brand'
                />

                <TopicItem 
                    img='icon - others.png' 
                    title='Others'
                />


            </Grid>
        </div>
    )
}