import { Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    
    title: {
        fontSize: '2.3rem',
        fontWeight: '400',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.9rem'
            }
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
        fontFamily: "'Helvetica', sans-serif",
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem',
                lineHeight: '1.5rem'
            }
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
