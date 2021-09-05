import { Button } from '@material-ui/core';
import React from 'react';
import apiClient from "../../utils/api-client";
import { useCartContext } from '../context/CartProvider';

const api = apiClient();

export default function AddToCart({product, variantId, quantity}){

    const [cart, setCart] = useCartContext();

    const cartHandler = async (e) => {
        
        const cartResponse = await api.ajax.cart.addItem({
            product_id: product.id,
            variant_id: variantId,
            quantity: +quantity
        })

        let cartJson = cartResponse.json;
        setCart(cartJson);

    }

    return (
        <Button 
            variant="contained"
            color="primary" 
            size="large"
            onClick= {cartHandler}
            >

            Add to cart
        </Button>
    )


}