import { Grid } from "@material-ui/core";
import MoreProducts from "../../MoreProducts/MoreProducts";

export default function FavouriteProductsContainer(){
    return (
        <MoreProducts>
                
                
                <MoreProducts.Body>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <MoreProducts.Item image="http://localhost:4000/img/fav_1.png"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <MoreProducts.Item image="http://localhost:4000/img/fav_2.png"/>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={3}>
                      <MoreProducts.Item image="http://localhost:4000/img/fav_3.png"/>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={3}>
                      <MoreProducts.Item image="http://localhost:4000/img/fav_4.png"/>
                    </Grid>
                  </Grid>
                  
                </MoreProducts.Body>

              </MoreProducts> 
    )
}