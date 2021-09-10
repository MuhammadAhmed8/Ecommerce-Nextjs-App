import { Grid } from "@material-ui/core";
import MoreProducts from "./MoreProducts";

export default function MoreProductsContainer(){
    return (
        <MoreProducts>
                <MoreProducts.Title>
                  RELATED PRODUCTS
                </MoreProducts.Title>
                
                <MoreProducts.Body>
                  <Grid container spacing={3}>
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