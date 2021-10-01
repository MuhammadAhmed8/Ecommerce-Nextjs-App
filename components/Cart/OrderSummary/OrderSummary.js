import React, {useState, useEffect} from 'react';
import {Button, Card, CardContent, TextField, Typography} from '@material-ui/core';
import useStyles from './orderSummaryStyles';
import ApplyCoupon from '../../Discount/ApplyCoupon';
import { useCartContext } from '../../context/CartProvider';


function OrderSummary(){

    const styles = useStyles()

    const [cart] = useCartContext();

    const getTotalItemsPrice = ()=>{
        const total = cart ? cart.items.reduce((total, item)=>{
            return total + item.price_total
        }, 0) : 0

        return total.toFixed(2)
    }

    const getShippingPrice = ()=>{
        const total = cart ? cart.shipping_price : 0
        return total;
    }

    return (
        <>
        <Card style={{boxShadow:"none"}}>

            <CardContent className={styles.orderSummary} style={{padding: "20px 15px"}}>
                
                <div className={styles.orderSummaryItem}>
                    <Typography variant="h5" style={{fontWeight: 700}}>Items</Typography>
                    <Typography variant="h5">
                        {`$${getTotalItemsPrice()}`}
                        
                    </Typography>
                </div>

                <div className={styles.orderSummaryItem} >
                    <Typography variant="body1">Shipping:</Typography>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                        <Typography variant="body1">{`$${getShippingPrice()}`}</Typography>
                        <Typography variant="caption" style={{textAlign:'end'}}>Add 1 more product(s) for FREE Shipping</Typography>
                    </div>

                </div>

                <div className={styles.orderSummaryItem}>
                    <Typography variant="body1">Tax:</Typography>
                    <Typography 
                        variant="body2" 
                        className = {styles.taxDescription}
                    >
                        Tax will be calculated during checkout
                    </Typography>

                </div>

                <div className={styles.orderSummaryItem} style={{justifyContent:'flexStart', borderBottom:"none"}}>
                    <ApplyCoupon/>
                </div>

                <div className={styles.orderSummaryItem}>
                    <Typography variant="h5" style={{fontWeight: 700}}>Estimated Total:</Typography>
                    <Typography variant="h5">$140.00</Typography>
                </div>

                

            </CardContent>
        </Card>

        </>



    )
}

export default OrderSummary;