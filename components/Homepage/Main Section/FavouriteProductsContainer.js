import { Grid } from "@material-ui/core";
import MoreProducts from "../../MoreProducts/MoreProducts";

export default function FavouriteProductsContainer(){
    return (
        <MoreProducts>
                <MoreProducts.Title>
                  Favourite Products
                </MoreProducts.Title>
                
                <MoreProducts.Body>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <MoreProducts.Item/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <MoreProducts.Item/>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={3}>
                      <MoreProducts.Item/>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={3}>
                      <MoreProducts.Item/>
                    </Grid>
                  </Grid>
                  
                </MoreProducts.Body>

              </MoreProducts> 
    )
}