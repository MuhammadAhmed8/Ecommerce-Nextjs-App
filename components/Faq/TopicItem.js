import { Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
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
}),
{index:1})

export default function TopicItem(props){
    const classes = useStyles();

    return(
            <Grid item xs={12} sm={6} md={4}>
            <input style={{display: 'none'}} type="radio" name="selection"  />
                    <label className={classes.label} for="radio-box">
                        <img className={classes.img} src={"img/" +  props.img} alt="icon" />
                        {props.title}
                    </label>
            </Grid>                
    )
}