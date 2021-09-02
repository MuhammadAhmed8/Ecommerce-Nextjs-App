import React, { useEffect } from "react";
import { Container, Grid, Box, Link } from "@material-ui/core";
import ProductCard from "../components/ProductList/ProductCard";
import FilterList from "../components/ProductList/FilterList";
import apiClient from "../utils/api-client";
import axios from 'axios';
import config from '../utils/config';
import NextLink from 'next/link';

const api = apiClient();

export default function Products(props){

    const {categories, products} = props;
    console.log(products, categories)
    return (
      <>
        <FilterList />
        <Box mb={4} />
        <Container maxWidth="md">
          <Grid container spacing={1}>
            {products.data.map((item,index)=>(
               <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                 <NextLink href={`/products/${item.slug}`} key={item.id} passHref>
                   <Link>
                      <ProductCard product={item}/>
                   </Link>

                 </NextLink>
             </Grid>
            ))}
           
          </Grid>
        </Container>
        <Box mb={3} />
      </>
    );
  
}


export async function getStaticProps(context){

    const response = await api.productCategories.list();
    const categories = response.json;

    const productsResponse = await api.ajax.products.list({
      limit: 10,
      offset:0,
      active:true,
      discontinued:false
    });
    const products = productsResponse.json;

    return {
      props:{
        categories,
        products

      }
    }

  

}
