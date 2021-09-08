import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import ProfileSidebar from "../../components/Customer/profile/ProfileSidebar";
import WishlistItem from "../../components/Customer/Wishlist/WishlistItem";


const useStyles = makeStyles(()=>(
{
   
}), {
    index: 1
})

export default function Wishlist(props){

    const styles = useStyles();

    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <Box>
                        <h2 style={{padding:"0 5px"}}>YOUR WISHLIST</h2>
                    </Box>
                    <br></br>
                    <WishlistItem item={{
                        name: 'Episoda Mosituerizer Gel',
                        price_total: 150,
                        product_image:[
                            {
                                url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576095586-tc-lrp-hydra-1576095580.jpg?crop=1xw:1xh;center,top&resize=480:*'
                            }
                        ]
                    }}></WishlistItem>

                    
                    <WishlistItem item={{
                        name: 'Episoda Mosituerizer Gel',
                        price_total: 150,
                        product_image:[
                            {
                                url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576095586-tc-lrp-hydra-1576095580.jpg?crop=1xw:1xh;center,top&resize=480:*'
                            }
                        ]
                    }}></WishlistItem>
                </Grid>
            </Grid>
                
                
        </div>
    )    
}