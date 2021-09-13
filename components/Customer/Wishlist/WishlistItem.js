import * as styles from './wishlistItem.module.css';

import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card, CardContent, CardHeader, Typography} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Image from 'next/image';
import AddToCart from "../../Cart/AddToCart";


function WishlistItem({item}){


    return (
        <>
        <Card style={{boxShadow:"none",marginBottom:18}}>

            <CardContent className={styles.cartBagItem}>
               <div className={styles.cartItemContent}>
                    <div className = {styles.cartItemImage}>
                        <img src={`/images/products/${item._id}/${item.images[0].filename}`} alt="cart-item" />
                    </div>
                    <div className={styles.cartBagItemText}>
                        <Typography 
                        variant="h2" 
                        className={styles.cartBagItemTextHeading}>
                            {item.name}
                        </Typography>
                        <p>Cell Renewal Award-Winning</p>
                        <p>Anti-Aging Treatment for Timeless Skin</p>
                        <p>1.6 Oz. / 160 ml</p>
                        <Typography><b>{`$${item.regular_price.toFixed(2)}`}</b></Typography>   

                    </div>

               </div>

               <div className={styles.cartItemActions}>
                
                <AddToCart color="secondary" productId={item._id} quantity={1}/>
                <ClearIcon  style={{cursor:'pointer'}}></ClearIcon>

               </div>



            </CardContent>
        </Card>

        </>



    )
}

export default WishlistItem;