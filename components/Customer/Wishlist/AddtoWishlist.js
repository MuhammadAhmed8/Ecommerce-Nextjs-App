import { Link } from "@material-ui/core";
import axios from 'axios';
import config from "../../../utils/config";

export default function AddToWishlist({productId, ...props}){

    const handleClick = async ()=>{
        try{
            const response = await axios.put(config.ajaxBase + "customer/wishlist",
            {productId: productId},
            {
                headers: {
                    Authorization: "Bearer "+localStorage.getItem("rht")
                },
    
                withCredentitals: true
            })
        
        }
        catch(err){
            console.log("Add to wishlist error" ,err);
        }
        
    }

    return (

        <Link onClick={handleClick} color="secondary" {...props}>
            Add To Wishlist
        </Link>
    )
}