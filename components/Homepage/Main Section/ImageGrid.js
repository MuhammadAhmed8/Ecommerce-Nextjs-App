import { Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
}),
{index:1})


export default function ImageGrid(props){
    const classes = useStyles(); 

    return(
            <Grid item xs={12} sm={6} md={3}>
                <img src={'img/' + props.img}/>
            </Grid>
    )
}