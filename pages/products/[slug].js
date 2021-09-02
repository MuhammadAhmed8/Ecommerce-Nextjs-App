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
import React, { Component } from "react";
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
                      name="option"
                      label="Select"
                      value={5}
                      onChange={(e) => this.onChange(e)}
                    >
                      <MenuItem value={"null"}>-- Please Select --</MenuItem>
                      <MenuItem value={"10"}>10 Pads</MenuItem>
                      <MenuItem value={"20"}>20 Pads</MenuItem>
                      <MenuItem value={"50"}>50 Pads</MenuItem>
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
                    value={1}
                    onChange={(e) => this.onChange(e)}
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


export async function getServerSideProps(context){

    const {slug} = context.params;

    const productResponse = await api.ajax.products.list({
      slug,
      limit: 1
    })

    const product = productResponse.json;

    console.log(product)

    return {

      props: {
        product: product.data[0]
      }

    }   


}