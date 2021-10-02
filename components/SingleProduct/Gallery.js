import { Card, CardMedia, makeStyles } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(()=>({
    productImg: {
        height: '500px'
    }
}),
{index:1})


export default function Gallery({images}){

    const classes = useStyles();

    return (
        // <Card variant="outlined" square>

        //     <CardMedia image={"/img/product__img.png" || images[0].url} className={classes.productImg}/>
        
        // </Card>

        <Carousel>
                <div>
                    <img src="/img/product__img.png" />
                </div>
                <div>
                    <img src="/img/product__img.png" />
                </div>
                <div>
                    <img src="/img/product__img.png" />
                </div>
                <div>
                    <img src="/img/product__img.png" />
                </div>
            </Carousel>
    )
}