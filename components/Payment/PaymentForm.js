import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";

export default function PaymentForm({value, handleChange, ...props}){

    

    return (
        <FormControl component="fieldset">
        <RadioGroup aria-label="paymentMethod" name="paymentMethod" value={value} onChange={handleChange}>
            <FormControlLabel value="612239f9105516c1947cd1f6" control={<Radio />} label="Cash on Delivery" />
            <FormControlLabel value="612382765b60db11995a298f" control={<Radio />} label="Paypal" />
            <FormControlLabel value="other" control={<Radio />} label="Credit Card" />
        </RadioGroup>
        </FormControl>
    )

}