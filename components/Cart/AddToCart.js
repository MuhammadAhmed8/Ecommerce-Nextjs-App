import { Button, CircularProgress } from '@material-ui/core';
import React, {useState} from 'react';
import apiClient from "../../utils/api-client";
import { useCartContext } from '../context/CartProvider';

const api = apiClient();

export default function AddToCart({product, variantId, quantity, ...props}){

    const [cart, setCart] = useCartContext();
    const [loading, setLoading] = useState(false);

    const cartHandler = async (e) => {
        
        setLoading(true);
        const cartResponse = await api.ajax.cart.addItem({
            product_id: product.id,
            variant_id: variantId,
            quantity: +quantity
        })

        setLoading(false);

        console.log(cartResponse, "reso")

        let cartJson = cartResponse.json.json;
        console.log(cartJson)
        setCart(cartJson);

    }

    return (
        <>
        

        <Button 
            variant="contained"
            color= {props.color? props.color: "primary"} 
            size="large"
            style={{width: 150}}
            onClick= {cartHandler}
            >

            
            {loading ? 
                <CircularProgress style={{color:"white", width:20, height:20}} /> : "Add to cart"}
        </Button>
        </>
    )


}