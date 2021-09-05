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
import { useCartContext } from '../../context/CartProvider';
import apiClient from "../../../utils/api-client";

const api = apiClient();

function CartItem({item}){

    const [cart, setCart] = useCartContext();
    const [quantity, setQuantity] = useState(item.quantity);

    const updateCart = async (value)=>{
        setQuantity(value);
        const response = await api.ajax.cart.updateItem(item.id, {
            quantity: value
        });
        const updatedCartData = response.json;
        setCart(updatedCartData);
    }

    const incrementItem = async ()=>{
        await updateCart(quantity + 1);
    }

    const decrementItem = async ()=>{
        
        await updateCart(quantity-1);
    }

    const deleteCartItem = async () => {
        const response = await api.ajax.cart.deleteItem(item.id);
        const updatedCart = response.json;
        setCart(updatedCart);
    };

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
                
                    <ExpandMoreIcon onClick={decrementItem} style={{cursor:'pointer'}}></ExpandMoreIcon>
                    <input value={quantity} readOnly ></input>
                    <ExpandLessIcon onClick={incrementItem} style={{cursor:'pointer'}}></ExpandLessIcon>
                    
                </div>

                 <Typography>{`$${item.price_total}`}</Typography>   
                 <ClearIcon onClick={deleteCartItem} style={{cursor:'pointer'}}></ClearIcon>

               </div>



            </CardContent>
        </Card>

        </>



    )
}

export default CartItem;