import { Button, CircularProgress } from '@material-ui/core';
import React, {useState} from 'react';
import apiClient from "../../utils/api-client";
import { useCartContext } from '../context/CartProvider';

const api = apiClient();

export default function AddToCart({productId, variantId, quantity, ...props}){

    const [cart, setCart] = useCartContext();
    const [loading, setLoading] = useState(false);

    const cartHandler = async (e) => {
                try{

        if(!variantId){
            props.setError({
               size: true
            });
            return;
        }
        if(quantity < 1){
            quantity = 1
        }

        setLoading(true);

        const cartResponse = await api.ajax.cart.addItem({
            product_id: productId,
            variant_id: variantId,
            quantity: +quantity
        })

        setLoading(false);

        console.log(cartResponse, "reso")

        let cartJson = cartResponse.json;
        console.log(cartJson)
        setCart(cartJson);

        
        }
        catch(e){
            setLoading(false);
            setError("Failed to add to cart");
        }

    }

    return (
        <>
        

        <Button 
            type="submit"
            variant="outlined"
            color= {props.color? props.color: "primary"} 
            style={{ boxShadow:'none', borderRadius:5, textTransform: 'inherit' }}
            onClick= {cartHandler}
            {...props}
            >

            
            {loading ? 
                <CircularProgress 
                    style={{color:"#fff", width:20, height:20}}
                 /> : "Add to Cart"}
        </Button>
        </>
    )


}