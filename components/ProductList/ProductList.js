import { Grid, Link } from "@material-ui/core";
import NextLink from 'next/link';
import ProductCard from './ProductCard';

export default function ProductList({products}){

    return (
        <Grid container spacing={3}>
        {
            products.data.map((item,index)=>(
               <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                 <NextLink href={`/products/${item.slug}`} key={item.id} passHref>
                   <Link>
                      <ProductCard product={item}/>
                   </Link>

                 </NextLink>
                </Grid>
            ))
        }
        </Grid>


    )

}