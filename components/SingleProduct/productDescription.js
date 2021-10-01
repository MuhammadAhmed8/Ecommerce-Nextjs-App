import { Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(()=>(
    {
        
        price:{
            color:'#000',
            margin: "40px 0",
            marginTop:"10px",
        },
        detail: {
            fontSize: '1rem',
            color:"#575757",
            lineHeight:1.5,
            fontWeight: 400,
            fontFamily: "'Helvetica', sans-serif"
        }
    }
))


export default function ProductDescription({product}){

    const classes = useStyles();

    return (
        <>
        <Typography variant="h3">
                {product.name}
        </Typography>
        <Typography variant="h3" className={classes.price}>
            <b>${product.price.toFixed(2)}</b>
        </Typography>
             
        <div className={classes.detail}
            dangerouslySetInnerHTML={{ __html: (product?.description)}}/>
        </>

    )


}
