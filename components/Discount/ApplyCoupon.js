import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { useState } from "react";
import InputField from "../Ui/InputField";
import axios from 'axios';
import config from '../../utils/config';
import discounts from "cezerin-client/lib/api/orders/discounts";
import apiClient from "../../utils/api-client";
import { useCartContext } from "../context/CartProvider";

const api = apiClient();

const useStyles = makeStyles((theme)=>({

    promoInputField: {
        width:"65%",
        marginRight:"10px",
    },
    promoInput: {
        padding: '14px 5px',
            [theme.breakpoints.down('sm')]: {
                padding: '11px 5px'
            }
    },
    promoInputLabel: {
        transform: 'translate(8px, 17px) !important',
            [theme.breakpoints.down('sm')]: {
                transform: 'translate(8px, 13px) !important',
            }
    },
    promoBtnField: {
        width:"30%",
        maxWidth: 150,
        height:48,
        textTransform: 'capitalize',
        fontWeight: '600',
        fontFamily: 'Helvetica',
            [theme.breakpoints.down('sm')]: {
                height: 40
            }
        
    }

}))

export default function ApplyCoupon(props){

    const classes = useStyles();

    const [coupon, setCoupon] = useState(null);
    const [couponApplied, setCouponApplied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cart, setCart] = useCartContext();

    const handleClick = async ()=>{
        if(!coupon || coupon === ""){
            return;
        }
        setError(null);
        setLoading(true);
        try{
            const response = await axios.post(config.ajaxBase + 'discounts/check',{
                couponCode: coupon,
            },{
                withCredentials:true
            });

            api.ajax.cart.update({
                coupon
            })
            .then(({status,json})=>{
                if(json.status === 200){
                    setCart(json.json)
                }
                
            })
            .catch(e=>{})

        }
        catch(e){
            setError("Sorry, the coupon is invalid,or your order doesn't qualify for the discounts.");
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <>
        {!(cart && cart.coupon !== "") ? 
        <div style={{flexGrow:1}}>
        <InputField
            className= {classes.promoInputField}
            name="couponCode"
            variant="outlined"
            placeholder="RB20OFF"
            label="Promo Code"
            value={coupon}
            onChange={(e)=>setCoupon(e.target.value)}
            helperText={error}
            inputProps={{ className: classes.promoInput }}
            InputLabelProps= {{ className: classes.promoInputLabel }}

        />

        <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
            className= {classes.promoBtnField}
        >
        {loading ? <CircularProgress style={{color:"white", width:20, height:20}} /> : "Apply" }
        </Button>
        </div>:
        <h3><b>Promo Applied: {cart.coupon}</b></h3>
        }

        </>
    )
}