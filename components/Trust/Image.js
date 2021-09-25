import { Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        [theme.breakpoints.down('sm')]:{
            backgroundColor: '#fff',
            padding: '10px'
        }
    },
    image: {
        height: '100%',
        objectFit: 'cover',
            [theme.breakpoints.down('sm')]:{
                maxWidth: '100%',
                height: '200px',
                objectFit: 'contain'
            }
    }
}),
{index:1})

export default function GridImage(props){
    const classes = useStyles();

    return(
            <Grid item xs={12} sm={4} >
                <div className={classes.container} >
                <img src={'img/'+ props.img} className={classes.image} />
                </div>
            </Grid>          
    )
}