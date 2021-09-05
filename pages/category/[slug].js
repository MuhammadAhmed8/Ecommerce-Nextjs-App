import React, { useEffect } from "react";
import { Container, Grid, Box, Link } from "@material-ui/core";
import FilterList from "../../components/ProductList/FilterList";
import apiClient from "../../utils/api-client";

import ProductList from "../../components/ProductList/ProductList";

const api = apiClient();

export default function CategoryProducts(props){

    const {categories, products} = props;
    console.log(products, categories)
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

    const {slug} = context.params;

    let categoryId = null;

    for(let i=0; i<categories.length; i++){
        if(categories[i].slug === slug){
            categoryId = categories[i].id;
            break;
        }
    }

    if(!categoryId) 
        return {notFound: true};
    
    const productsResponse = await api.ajax.products.list({
        category_id: categoryId,
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

export async function getStaticPaths(){

    return {
        fallback:'blocking',
        paths: [
          {
            params: {
              slug:'skin-care'
            }
          },
          {
            params:{
              slug:'hair-care'
            }
          },
          {
            params:{
              slug:'health-care'
            }
          }

        ],
        
      }   

}
