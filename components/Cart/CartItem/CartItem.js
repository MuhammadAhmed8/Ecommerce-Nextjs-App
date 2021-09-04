import * as styles from './cartItem.module.css';

import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardHeader, Typography} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClearIcon from '@material-ui/icons/Clear';
import Image from 'next/image';
// const useStyles = makeStyles((theme)=>({}))

function CartItem({item}){

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
                        <p>Cell Renewal Award-Winning</p>
                        <p>Anti-Aging Treatment for Timeless Skin</p>
                        <p>1.6 Oz. / 160 ml</p>
                    </div>

               </div>

               <div className={styles.cartItemActions}>
                <div className={styles.cartBagItemCount}>
                
                    <ExpandMoreIcon></ExpandMoreIcon>
                    <input value={item.quantity}></input>
                    <ExpandLessIcon></ExpandLessIcon>
                    
                </div>

                 <Typography>{`$${item.price_total}`}</Typography>   
                 <ClearIcon></ClearIcon>

               </div>



            </CardContent>
        </Card>

        </>



    )
}

export default CartItem;