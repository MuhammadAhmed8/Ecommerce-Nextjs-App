import * as styles from './cartItem.module.css';

import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardHeader, CircularProgress, LinearProgress, Typography} from '@material-ui/core';
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
    const [loading, setLoading] = useState(false);

    const updateCart = async (value)=>{
        setLoading(true);
        setQuantity(value);
        const response = await api.ajax.cart.updateItem(item.id, {
            quantity: value
        });
        const updatedCartData = response.json.json;
        setCart(updatedCartData);
        setLoading(false);
    }

    const incrementItem = async ()=>{
        await updateCart(quantity + 1);
    }

    const decrementItem = async ()=>{
        
        await updateCart(quantity-1);
    }

    const deleteCartItem = async () => {
        setLoading(true);
        const response = await api.ajax.cart.deleteItem(item.id);
        const updatedCart = response.json.json;
        setCart(updatedCart);
        setLoading(false);
    };

    return (
        <>
        <Card style={{boxShadow:"none",marginBottom:18}}>
        {loading && <LinearProgress />}
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
                        <p>{item.variant_name}</p>
                    </div>

               </div>

               <div className={styles.cartItemActions}>
                <div className={styles.cartBagItemCount}>
                
                    <ExpandMoreIcon onClick={decrementItem} style={{cursor:'pointer'}} iconstyle={{fontSize:'1.7rem'}}></ExpandMoreIcon>
                    <input value={quantity} readOnly style={{fontSize:"1rem"}}></input>
                    <ExpandLessIcon onClick={incrementItem} style={{cursor:'pointer'}} iconstyle={{fontSize:'1rem'}}></ExpandLessIcon>
                    
                </div>

                 <h2 className={styles.price}>{`$${item.price_total}`}</h2>   
                 <ClearIcon onClick={deleteCartItem} style={{cursor:'pointer'}}></ClearIcon>

               </div>


               
            </CardContent>
            
        </Card>
        

        </>



    )
}

export default CartItem;