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
import apiClient from "../../utils/api-client";
import axios from 'axios';
import config from '../../utils/config';
import dynamic from 'next/dynamic'
import AddToCart from "../../components/Cart/AddToCart";
import AttributeButton from "../../components/SingleProduct/AttributeButton";
import Attribute from "../../components/SingleProduct/Attribute";
import ReviewsContainer from "../../components/Reviews/ReviewsContainer";
import MoreProducts from "../../components/MoreProducts/MoreProducts";
import MoreProductsContainer from "../../components/MoreProducts/MoreProductsContainer";
import AddToWishlist from "../../components/Customer/Wishlist/AddtoWishlist";
import ReviewForm from "../../components/Reviews/ReviewForm";
// import ProductDescription from "../../components/SingleProduct/ProductDescription";
const ProductDescription = dynamic(
  () => import("../../components/SingleProduct/ProductDescription"),
  { ssr: false }
)

const api = apiClient();

const useStyles = makeStyles((theme)=>(
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
        },
        selectMargin: {
          margin: '0px 5px',
            [theme.breakpoints.down('sm')]: {
              margin: '0px'
            }
        }
    }
))

const TABS = {
  "BENEFITS": "Benefits",
  "USAGE": 'Usage',
  "INGREDIENTS": 'Ingredients',
  "REVIEWS": 'Reviews'
}

export default function ProductView({product}){

  const classes = useStyles();

  const [quantity, setQuantity] = useState(1);
  const [currentAttributeTab, setCurrentAttributeTab] = useState(TABS.INGREDIENTS)
  const [size, setSize] = useState(null);
  
  const onChange = (e) => {
    //this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  const changeAttributeTab = (tab) => {
    setCurrentAttributeTab(tab);
  }

  
  console.log(product)

    return (
      <>
        <div style={{background:"#fff", padding:"20px 5%"}}>
          <Typography variant="body1" style={{padding: "30px 0 0 0"}}>
            Home -- {product.name}
          </Typography>
          <Box mb={5} />
          <Grid container spacing={4} style={{ justifyContent: 'space-between' }}>
            <Grid item xs={12} sm={5}>
              <Gallery images={product.images}></Gallery>
            </Grid>

            <Grid item xs={12} sm={6}>

              <ProductDescription product={product}/>
              <Box mb={2} />

              <Grid container >
                <Grid item xs={12} md={5}>
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
                      className={classes.selectMargin}
                      name="size"
                      id="size"
                      label="Size"
                      value={size}
                      required
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {
                        product.variants.map(variant => {
                            return <MenuItem key={variant.id} value={variant.id}>
                              {product.options[0].values.find(v => v.id === variant.options[0].value_id).name}
                              </MenuItem>
                        })
                        
                      }
            
                      
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
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
                  <AddToCart productId={product.id} variantId={size} quantity={quantity} variant="contained"
                   style={{width:"200px", height:"54px", fontSize:19, textTransform: 'inherit'}}/>
                   
                  <AddToWishlist productId={product.id} style={{marginLeft:12}}>

                  </AddToWishlist>
              <Box mb={5} />
                <Button color="secondary" startIcon={<EqualizerIcon />}>
                  ADD TO COMPARE
                </Button>
              <Box mb={5} />
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div style={{display:'flex', justifyContent:'center', gap:"20px", alignItems:'center', flexWrap:'wrap'}}>
                <AttributeButton onClick={()=>changeAttributeTab(TABS.BENEFITS)} active={currentAttributeTab === TABS.BENEFITS}> 
                  Benefits 
              </AttributeButton>
                <AttributeButton onClick={()=>changeAttributeTab(TABS.USAGE)} active={currentAttributeTab === TABS.USAGE} >
                  Usage 
                </AttributeButton>
                <AttributeButton onClick={()=>changeAttributeTab(TABS.INGREDIENTS)} active={currentAttributeTab === TABS.INGREDIENTS}> 
                 Ingredients
                </AttributeButton>
                <AttributeButton onClick={()=>changeAttributeTab(TABS.REVIEWS)} active={currentAttributeTab === TABS.REVIEWS}>
                  Reviews
                </AttributeButton>
              </div>
                              
            </Grid>

            <Grid item xs={12} >
              <div>

                 {
                   product.attributes.map((attr, index)=>{
                     return <Attribute active={currentAttributeTab === attr.name} key={index}>
                              <Typography variant="body1">
                                {attr.value}
                              </Typography>
                            </Attribute>
                   })
                   
                    
                 
                }

                <Attribute active={currentAttributeTab === TABS.REVIEWS}>
                  <ReviewsContainer
                    name= {product.name}
                  />
                  <ReviewForm 
                  name = {product.name}
                />
                </Attribute>
              </div>
              
            </Grid>

            <Grid item xs={12} p={0}>
              
              <MoreProductsContainer></MoreProductsContainer>

            </Grid>
            
          </Grid>
        </div>
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

    if(product.data.length < 1){
      return {
        notFound: true
      }
    }

    return {

      props: {
        product: product.data[0]
      },

      revalidate: 1,


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
    fallback:'blocking',
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