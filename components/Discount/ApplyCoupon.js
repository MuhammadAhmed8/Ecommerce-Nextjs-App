import { Button } from "@material-ui/core";
import { useState } from "react";
import InputField from "../Ui/InputField";

export default function ApplyCoupon(props){

    const [coupon, setCoupon] = useState(null);

    const handleClick = ()=>{
        alert(coupon)
    }

    return (
        <>
        <InputField
        name="couponCode"
        style={{width:'74%', marginRight:"10px"}}
        variant="outlined"
        placeholder="RB20OFF"
        label="Promo Code"
        value={coupon}
        onChange={(e)=>setCoupon(e.target.value)}
        />

        <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        >
        APPLY
        </Button>

        </>
    )
}