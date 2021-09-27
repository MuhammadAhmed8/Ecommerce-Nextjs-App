import { Box, Grid, makeStyles, Typography,CircularProgress, Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileSidebar from "../../components/Customer/Profile/ProfileSidebar";
import WishlistItem from "../../components/Customer/Wishlist/WishlistItem";
import config from "../../utils/config";

const useStyles = makeStyles(()=>(
{
   
}), {
    index: 1
})

export default function Wishlist(props){

    const styles = useStyles();
    const [error, setError] = useState(null);
    const [wishlist, setWishlist] = useState(null);

    useEffect(()=>{

        async function fetchWishList(){
            try{
                const {data} = await axios.get(config.ajaxBase + "customer/wishlist", {
                    headers:{
                        Authorization: "Bearer " + localStorage.getItem("rht")
                    },
                    withCredentials: true
                });

                if(data){
                    setWishlist(data.wishlist);
                }
            }
            catch(e){
                setError("Error");
            }
            

        }

        fetchWishList();

    }, [])

    return (
        <Container spacing={100} style={{marginTop:60}}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <Box style={{padding:10, marginBottom: 20, background:"#fff"}}>
                        <h2 style={{padding:"0 5px"}}>Your Wishlist</h2>
                    </Box>
                    <br></br>

                    {
                        <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                        {!wishlist && <CircularProgress ></CircularProgress>}
                        </div>
                    }

                    {
                        
                         
                        wishlist && wishlist.length > 0 ? wishlist.map((item, index)=>{
                            return <WishlistItem key={index} item={item}></WishlistItem>
                        })
                        : 
                        <p>No Items in your wishlist</p>
                    }
                    

                    
                    
                </Grid>
            </Grid>
                
                
        </Container>
    )    
}