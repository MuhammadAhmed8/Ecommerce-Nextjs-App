import { Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
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
        padding: '30px 5px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.65rem'
            }
    },
    img: {
        marginBottom: '10px',
        width: '50px',
        height: 'auto',
        objectFit: 'contain',
        filter: 'brightness(20%)',
        opacity: '0.3',
        display: 'block',
            [theme.breakpoints.down('sm')]: {
                width: '32px'
            }
    },
}),
{index:1})

export default function TopicItem(props){
    const classes = useStyles();

    return(
            <Grid item xs={6} md={4}>
            <input style={{display: 'none'}} type="radio" name="selection"  />
                    <label className={classes.label} htmlFor="radio-box">
                        <img className={classes.img} src={"img/" +  props.img} alt="icon" />
                        {props.title}
                    </label>
            </Grid>                
    )
}