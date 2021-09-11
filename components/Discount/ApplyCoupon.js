import { Button, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import InputField from "../Ui/InputField";
import axios from 'axios';
import config from '../../utils/config';
import discounts from "cezerin-client/lib/api/orders/discounts";

export default function ApplyCoupon(props){

    const [coupon, setCoupon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = async ()=>{
        if(!coupon || coupon === ""){
            return;
        }
        setError(null);
        setLoading(true);
        try{
            const response = await axios.post(config.ajaxBase + 'discounts/apply',{
                couponCode: coupon,
            },{
                withCredentials:true
            });

            console.log(response)
            
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
        <InputField
        name="couponCode"
        style={{width:'70%', marginRight:"10px"}}
        variant="outlined"
        placeholder="RB20OFF"
        label="Promo Code"
        value={coupon}
        required
        onChange={(e)=>setCoupon(e.target.value)}
        helperText={error}
        />

        <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        style={{
            width:'30%',
            maxWidth: 150,
            height:54,
            letterSpacing: 3
           
        }}
        >
        {loading ? <CircularProgress style={{color:"white", width:20, height:20}} /> : "Apply" }
        </Button>

        </>
    )
}