import { Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(()=>(
    {
        
        price:{
            color:'#CA0303',
            margin: "40px 0",
            marginTop:"10px",
            fontSize:"2.6rem"
        },
        detail: {
            fontSize: '18px'
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
              <Typography variant="body1" className={classes.detail} color="textSecondary">
                Detoxify the skin with Rénova’s Professional Exfoliating Peeling
                Pads. Skin Renewal Promised, New Found Confidence Guaranteed.
                These Clinically Proven Professional Peel Pads gently promote
                exfoliation, skin renewal, and boost the skins all over texture
                and glow. A pH balanced, alcohol-free, Fragrance-free, and
                Paraben-free solution to dull and tired skin. Banish skin
                discoloration, acne, and dry skin flakes with Rénova’s 50 Pack
                Professional Exfoliating Peel Pads
        </Typography>
        </>

    )


}