import React, { useEffect } from "react";
import { Container, Grid, Box, Link, Button } from "@material-ui/core";
import FilterList from "../components/ProductList/FilterList";
import apiClient from "../utils/api-client";
import axios from 'axios';
import config from '../utils/config';
import NextLink from 'next/link';
import ProductList from "../components/ProductList/ProductList";
import Header from "../components/Homepage/Header";
import RedButton from "../components/Ui/RedButton";
import { useRouter } from "next/dist/client/router";

const api = apiClient();

export default function Products(props){

    const {categories, products} = props;
    const router = useRouter();

    const handlePagination = ()=>{
      let {page} = router.query;
      if(!page){
        page = 1;
      }
      page = +page + 1;
      router.push("?page="+page);
    }

    return (
      <>
        <Container style={{marginTop: 30, padding: '0px'}} fixed>  
        
        <FilterList categories={categories}/>
        </Container>
        <div style={{background:"#fff", marginTop:50, padding: "50px 0"}}>
        
        <Container fixed style={{ padding: '0px'}}>
          <ProductList products={products}></ProductList>   

          <div style={{textAlign:'center', margin: "45px 0 30px 0"}}>
            <Button 
            variant="outlined" 
            color="secondary" 
            style={{borderColor: "#333", fontWeight: 700}}
            onClick={handlePagination}
            >Load More</Button>
          </div>
        </Container>
        
        
        </div>
      </>
    );
  
}



export async function getServerSideProps(context){

    const response = await api.productCategories.list();
    const categories = response.json;
    const {query} = context;
    
    const productsResponse = await api.ajax.products.list({

      active:true,
      discontinued:false,
      ...query,
      limit: 15,
      offset: (+(query.page || 1)-1) * 15
    });
    const products = productsResponse.json;

    return {
      props:{
        categories,
        products

      },
    }

}


