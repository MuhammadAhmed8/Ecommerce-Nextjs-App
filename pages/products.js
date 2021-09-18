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
        <Container spacing={100} style={{marginTop: 50}}>  
        
        <FilterList categories={categories}/>
        <div style={{background:"#fff", marginTop:50, padding:35}}>
        <ProductList products={products}></ProductList>   
        </div>
        </Container>
        <Box mb={3} />
      </>
    );
  
}


export async function getServerSideProps(context){

    const response = await api.productCategories.list();
    const categories = response.json;
    const {query} = context;
  console.log(query,"query")
    const productsResponse = await api.ajax.products.list({
      limit: 10,
      offset:0,
      active:true,
      discontinued:false,
      ...query
    });
    const products = productsResponse.json;

    return {
      props:{
        categories,
        products

      },
    }

  

}
