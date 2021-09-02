import { Card, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(()=>(
    {
        productImg :{
            height: '400px'
          },
   
    }
))


export default function Gallery({images}){

    const classes = useStyles();

    return (
        <Card variant="outlined" square>
            <CardMedia image={"/img/product__img.png" || images[0].url} className={classes.productImg}/>
        </Card>
    )
}