import React, { useContext, useEffect, useState } from "react";

export const CartContext = React.createContext([
    {},
    ()=>{}
])

export function CartProvider(props){

    const [cart, changeCart] = useState(null);

    const setCart = (data)=>{
        changeCart(data);
        localStorage.setItem('reno-cart', JSON.stringify(data));
    }

    useEffect(() => {
        
        if ( process.browser ) {

			let cartData = localStorage.getItem('reno-cart');
            console.log('cart', cartData);
			cartData = null !== cartData ? JSON.parse(cartData) : null;
			setCart( cartData );

		}

    }, [])

    return (
        <CartContext.Provider value={[cart,setCart]}>
            {props.children}
        </CartContext.Provider>
    )

}

export function useCartContext(){
    return useContext(CartContext);
}