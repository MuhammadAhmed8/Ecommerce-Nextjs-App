import React, { useEffect } from "react";
import { Container, Grid, Box, Link } from "@material-ui/core";
import FilterList from "../components/ProductList/FilterList";
import apiClient from "../utils/api-client";
import axios from 'axios';
import config from '../utils/config';
import NextLink from 'next/link';
import ProductList from "../components/ProductList/ProductList";

const api = apiClient();

export default function Products(props){

    const {categories, products} = props;
    console.log(categories, "Cat")
    return (
      <>
        <FilterList categories={categories}/>
        <Box mb={4} />
        <Container maxWidth="md">  
          <ProductList products={products}></ProductList>   
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

      },
      revalidate: 10  // todo: will change to more seconds later
    }

  

}
