// import "./ProductDetails.css";
import {
  Grid,
  Container,
  CardMedia,
  Card,
  Box,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Button,
} from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import React, { useState, useEffect } from "react";
import {makeStyles} from "@material-ui/core/styles";
import Gallery from "../../components/SingleProduct/Gallery";
// import ProductDescription from "../../components/singleProduct/productDescription";
import apiClient from "../../utils/api-client";
import axios from 'axios';
import config from '../../utils/config';
import dynamic from 'next/dynamic'

const ProductDescription = dynamic(
  () => import("../../components/singleProduct/productDescription"),
  { ssr: false }
)

const api = apiClient();

const useStyles = makeStyles(()=>(
    {
        
        fullHeight: {
            height: '100vh'
        },
        priceColor:{
            color:'#ca0303'
        },
        bottomMargin:{
            marginBottom: '200px'
        },
        detailClass: {
            fontSize: '18px'
        }
    }
))


export default function ProductView({product}){

  const classes = useStyles();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  
  const onChange = (e) => {
    //this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  console.log(product)

    return (
      <>
        <Container>
          <Box mb={5} />
          <Typography variant="body1">
            Home -- {product.name}
          </Typography>
          <Box mb={5} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Gallery images={product.images}></Gallery>
            </Grid>

            <Grid item xs={12} sm={6}>

                <ProductDescription product={product}/>
              <Box mb={5} />

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    size="small"
                    required
                    fullWidth
                  >
                    <InputLabel>Select</InputLabel>

                    <Select
                      name="size"
                      id="size"
                      label="Size"
                      value={size}
                      required
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {
                        product.options[0].values.map(value => {
                            return <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
                        })
                        
                      }
            
                      
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    type="number"
                    name="qty"
                    size="small"
                    margin="normal"
                    label="Qty"
                    variant="outlined"
                    color="secondary"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    inputProps={{ min: 1, style: { textAlign: "center" } }}
                  />
                </Grid>
              </Grid>
              <Box mb={5} />
              <Button variant="contained" color="primary" size="large">
                Add to cart
              </Button>
              <Box mb={5} />
              <Button color="secondary" startIcon={<EqualizerIcon />}>
                ADD TO COMPARE
              </Button>
              <Box mb={5} />
            </Grid>
          </Grid>
        </Container>
        <Box className={classes.bottommargin} />
      </>
    );
  
}


export async function getStaticProps(context){

    const {slug} = context.params;

    const productResponse = await api.ajax.products.list({
      slug,
      limit: 1
    })

    const product = productResponse.json;

    console.log(product, "Hii")

    return {

      props: {
        product: product.data[0]
      },

      revalidate: 1

    }   


}

export async function getStaticPaths(){

  // const productsResponse = await api.ajax.products.list({
  //   fields:'slug'
  // })

  // const products = productsResponse.json;

  // console.log(products, "hhh")

  // const paths = [];

  // products.data.map(product => {
  //   if(product.slug && product.slug !== ""){
  //     paths.push({
  //       params:{
  //         slug: product.slug
  //       }
  //     })
  //   }
  // })

  // console.log(paths, "paths")

  return {
    fallback:true,
    paths: [
      {
        params: {
          slug:'epidermal-growth-factor-serum'
        }
      },
      {
        params:{
          slug:'daily-polypeptide-moisturizer'
        }
      }
    ],
    
  }   


}