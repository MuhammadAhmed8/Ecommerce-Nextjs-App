import { Button, CircularProgress } from '@material-ui/core';
import React, {useState} from 'react';
import apiClient from "../../utils/api-client";
import { useCartContext } from '../context/CartProvider';

const api = apiClient();

export default function AddToCart({productId, variantId, quantity, ...props}){

    const [cart, setCart] = useCartContext();
    const [loading, setLoading] = useState(false);

    const cartHandler = async (e) => {
        
        setLoading(true);
        try{
        const cartResponse = await api.ajax.cart.addItem({
            product_id: productId,
            variant_id: variantId,
            quantity: +quantity
        })

        setLoading(false);

        console.log(cartResponse, "reso")

        let cartJson = cartResponse.json.json;
        console.log(cartJson)
        setCart(cartJson);
        }
        catch(e){
            console.log("Error: Failed to add to cart")
        }

    }

    return (
        <>
        

        <Button 
            variant="outlined"
            color= {props.color? props.color: "primary"} 
            style={{ boxShadow:'none', width:140}}
            onClick= {cartHandler}
            >

            
            {loading ? 
                <CircularProgress style={{color:"#333", width:20, height:20}} /> : "Add to cart"}
        </Button>
        </>
    )


}