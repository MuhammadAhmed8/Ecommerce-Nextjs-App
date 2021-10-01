import { Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme)=>({
    
    price:{
        //color:'#CA0303',
        color: '#000',
        margin: '30px 0px !important',
        marginTop: '30px'
    },
    detail: {
        fontSize: '1rem',
        color:"#575757",
        lineHeight:1.5,
        fontWeight: 400,
        fontFamily: "'Helvetica', sans-serif"
    }
}),
{index:1})



export default function ProductDescription({product}){

    const classes = useStyles();

    return (
        <>
        <Typography variant="h3" style={{fontWeight: 300}}>
                {product.name}
        </Typography>
        <Typography variant='h3' className={classes.price} >
            <b>${product.price.toFixed(2)}</b>
        </Typography>
             
        <div className={classes.detail}
            dangerouslySetInnerHTML={{ __html: (product?.description)}}/>
        </>

    )


}
