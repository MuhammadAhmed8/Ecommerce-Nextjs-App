import { Grid, makeStyles } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import RedButton from "../../Ui/RedButton";


const useStyles = makeStyles((theme) => ({
    background: {
        height: '400px',
        margin: '40px 0px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0px 40px',
            [theme.breakpoints.down('sm')]: {
                padding: '0px 20px',
                height: '360px'
            }
    },
    textCard: {
        padding: '20px 35px',
        backgroundColor: "#fff",
        maxWidth: '500px',
        width: '100%',
        textAlign: 'left',
            [theme.breakpoints.down('sm')]: {
                padding: '10px 20px',
            }
    },
    heading: {
        fontSize: '2rem',
        fontFamily: 'Times',
        fontWeight: '300',
        marginBottom: '20px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.7rem',
                marginBottom: '13px'
            }
    },
    text: {
        margin: '20px 5px',
        fontSize: '1.2rem',
        fontFamily: 'Helvetica',
        lineHeight: '1.8rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem',
                lineHeight: '1.4rem'
            }
    },
}),
{index:1})

export default function BackImageCard(props){
    const classes = useStyles(); 
    const router = useRouter();

    return(
        <div style={{ backgroundImage: `url(${props.image})` }} className={classes.background}>
            <div className={classes.textCard}>
                <h2 className={classes.heading}>{props.heading}</h2>
                <p className={classes.text}>
                    
                    {props.text && props.text}
                </p>
                <RedButton onClick={()=>router.push(props.url)}>
                    {props.buttonText}
                </RedButton>
            </div>
        </div>
    )
}