import { Grid, makeStyles, withStyles, Button } from "@material-ui/core";
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(() => ({
    background: {
        background: `url('img/ask_anything.png')`,
        height: '400px',
        margin: '40px 0px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0px 40px'
    },
    textCard: {
        padding: '20px 35px',
        backgroundColor: "#fff",
        maxWidth: '36rem',
        width: '100%',
        textAlign: 'left'
    },
    heading: {
        fontSize: '2rem',
        fontFamily: 'Times',
        fontWeight: '300',
        marginBottom: '20px'
    },
    text: {
        margin: '20px 5px',
        fontSize: '1.2rem',
        fontFamily: 'Helvetica',
        lineHeight: '1.8rem',
    },
}),
{index:1})

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[900]),
      textTransform: 'Capitalize',
      backgroundColor: red[900],
      '&:hover': {
        backgroundColor: '#ccc',
        color: '#222',
      },
      fontSize: '0.9rem',
      fontWeight: '400',
      fontFamily: 'Helvetica',
    },
  }))(Button);

export default function ContactSection(){
    const classes = useStyles(); 

    return(
        <div className={classes.background}>
            <div className={classes.textCard}>
                <h2 className={classes.heading}>Ask Us Anything</h2>
                <p className={classes.text}>Whether you're seeking skincare advice, need help tracking an order, or just have a quick question,
                    our Team is here to help!
                </p>
                <ColorButton className={classes.button}
                    variant="contained"
                    color='primary'
                    value='Contact Us' >Contact Us</ColorButton>
            </div>
        </div>
    )
}