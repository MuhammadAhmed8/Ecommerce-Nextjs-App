import React, {useState, useEffect} from 'react';
import {Button, Card, CardContent, TextField, Typography} from '@material-ui/core';
import useStyles from './orderSummaryStyles';


function OrderSummary(){

    const styles = useStyles()

    return (
        <>
        <Card style={{boxShadow:"none",marginBottom:18}}>

            <CardContent className={styles.orderSummary} style={{padding: "25px 15px"}}>
                
                <div className={styles.orderSummaryItem}>
                    <Typography variant="h5">Items</Typography>
                    <Typography variant="h5">$140.00</Typography>
                </div>

                <div className={styles.orderSummaryItem} >
                    <Typography variant="body1">Shipping:</Typography>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                        <Typography variant="body1">$35.00</Typography>
                        <Typography variant="caption" style={{textAlign:'end'}}>Add 1 more product(s) for FREE Shipping</Typography>
                    </div>

                </div>

                <div className={styles.orderSummaryItem}>
                    <Typography variant="body1">Tax:</Typography>
                    <Typography variant="body1" style={{textAlign:'end'}}>Tax will be calculated during checkout</Typography>

                </div>

                <div className={styles.orderSummaryItem} style={{justifyContent:'flexStart', borderBottom:"none"}}>
                    <TextField
                        name="couponCode"
                        style={{width:'74%', marginRight:"10px"}}
                        variant="outlined"
                        placeholder="RB20OFF"
                        label="Promo Code"
                    
                    >
                    </TextField>
                    <Button
                        variant="contained"
                        color="secondary"
                     >
                        APPLY
                    </Button>
                </div>

                <div className={styles.orderSummaryItem}>
                    <Typography variant="h5">Estimated Total:</Typography>
                    <Typography variant="h5">$140.00</Typography>
                </div>

                <Button
                variant="contained"
                color="secondary"
                >
                CHECKOUT
                </Button>
                <Button
                variant="contained"
                >
                CONTINUE SHOPPING
                </Button>


            </CardContent>
        </Card>

        </>



    )
}

export default OrderSummary;