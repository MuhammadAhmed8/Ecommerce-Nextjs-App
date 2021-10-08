import * as styles from './historyItem.module.css';
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card, CardContent, CardHeader, Typography} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Image from 'next/image';
import AddToCart from "../../Cart/AddToCart";


function OrderItem({item}){


    return (
        <>
        <Card style={{boxShadow:"none",marginBottom:18}}>

            <CardContent className={styles.cartBagItem}>
               <div className={styles.cartItemContent}>
                    <div className = {styles.cartItemImage}>
                        <img src={item.product_image[0].url} alt="cart-item" />
                    </div>
                    <div className={styles.cartBagItemText}>
                        <Typography 
                        variant="h2" 
                        className={styles.cartBagItemTextHeading}>
                            {item.name}
                        </Typography>
                        
                        <p>
                        Cell Renewal Award-Winning Anti-Aging
                        </p>
                        <p>
                        Treatment for Timeless Skin
                        </p>
                        <p>
                            {item.variant_name}
                        </p>
                        <Typography><b>{`$${item.price_total.toFixed(2)}`}</b></Typography>   

                    </div>

               </div>

               <div className={styles.cartItemActions}>
                
                <p><b>Q.Ty</b> <br></br> 1</p>
                <AddToCart
                style={{background: "#333", color: '#fff', border:'none', padding: "11px 36px"}}
                productId={item.product_id} variantId={item.variant_id} quantity={item.quantity}>
                    Order Again
                </AddToCart>
               </div>



            </CardContent>
        </Card>

        </>



    )
}

export default OrderItem;