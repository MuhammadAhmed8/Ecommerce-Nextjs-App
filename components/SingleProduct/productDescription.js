import { Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

<<<<<<< HEAD
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
=======

const useStyles = makeStyles((theme)=>({
    
    title: {
        fontSize: '2.3rem',
        fontWeight: '400'
    },
    price:{
        color:'#CA0303',
        margin: '30px 0px ',
        marginTop: '10px'
    },
    detail: {
        fontSize: '1.1rem',
        color:"#575757",
        lineHeight: '1.8rem',
        fontWeight: 400,
        fontFamily: "'Helvetica', sans-serif"
>>>>>>> 93c825b4477d60121158c652a1f09b9d4dc86624
    }
}),
{index:1})



export default function ProductDescription({product}){

    const classes = useStyles();

    return (
        <>
        <Typography variant="h3" className={classes.title}>
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
