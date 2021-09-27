import { Container, Grid } from "@material-ui/core";
import MoreProducts from "./MoreProducts";

export default function MoreProductsContainer(){
    return (
        <MoreProducts>
                <MoreProducts.Title>
                  Related Products
                </MoreProducts.Title>
                
                <MoreProducts.Body>
                  <Container>
                  <Grid spacing={3} container>
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
                  </Container>
                  
                </MoreProducts.Body>

        </MoreProducts> 
    )
}