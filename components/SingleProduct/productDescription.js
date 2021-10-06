import { Chip, Typography } from "@material-ui/core";
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
    old_price:{
        marginLeft: '20px',
        color:'#333',
        fontSize: "1.2rem",
        margin: '30px 0px ',
        marginTop: '10px',
        textDecoration: 'line-through'
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
    },
    price_container:{
        display:'flex',
        alignItems:'center'

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
        <div className={classes.price_container}>
            <Typography variant='h3' className={classes.price} >
                <b>${product.price.toFixed(2)}</b>
            </Typography>
            {
                product.on_sale &&
                <Typography variant='h3' className={classes.old_price} >
                    <b>${product.regular_price.toFixed(2)}</b>
                </Typography>
            }
        </div>
        
        
             
        <div className={classes.detail}
            dangerouslySetInnerHTML={{ __html: (product?.description)}}/>
        </>

    )


}
