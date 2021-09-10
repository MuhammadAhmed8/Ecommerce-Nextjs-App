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
import AddToCart from "../../components/Cart/AddToCart";
import AttributeButton from "../../components/SingleProduct/AttributeButton";
import Attribute from "../../components/SingleProduct/Attribute";
import ReviewsContainer from "../../components/Reviews/ReviewsContainer";
import MoreProducts from "../../components/MoreProducts/MoreProducts";
import MoreProductsContainer from "../../components/MoreProducts/MoreProductsContainer";

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

const TABS = {
  "BENEFITS": 1,
  "USAGE": 2,
  "INGREDIENTS": 3,
  "REVIEWS": 4
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
                        product.variants.map(variant => {
                            return <MenuItem key={variant.id} value={variant.id}>
                              {product.options[0].values.find(v => v.id === variant.options[0].value_id).name}
                              </MenuItem>
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
                  <AddToCart product={product} variantId={size} quantity={quantity}></AddToCart>
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
                  currentAttributeTab === TABS.BENEFITS && 
                    <Attribute>
                    <p>
                    The powerful Rénova’s EGF Serum with Hyaluronic Acid & Alpha Arbin stimulates cells in the skin called fibroblasts, which produce collagen and elastin to thicken and tighten skin. Additionally, Reduces the Appearance of Fine Lines and Wrinkles. Improves Hydration and Prevents Hyperpigmentation.
                    </p>
                  </Attribute>
                 
                }

                {
                 currentAttributeTab === TABS.INGREDIENTS && 
                  <Attribute>
                  <p>
                  <b>INGREDIENTS*:</b>
                   AQUA/WATER/EAU, CETEARYL ISONONANOATE, GLYCERIN, ISONONYL ISONONANOATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTYLENE GLYCOL, PPG-3 MYRISTYL ETHER, ETHYLENE/PROPYLENE/STYRENE COPOLYMER, DIPSACUS SYLVESTRIS EXTRACT, BUTYLENE GLYCOL, PARFUM/FRAGRANCE, PHENOXYETHANOL, PROPANEDIOL, TROMETHAMINE, SILYBUM MARIANUM SEED OIL, CARBOMER, TOCOPHERYL ACETATE, ESCIN, CHENOPODIUM QUINOA SEED EXTRACT, ETHYLHEXYLGLYCERIN. SQUALANE. AVENA SATIVA (OAT) KERNEL EXTRACT. THEOBROMA CACAO (COCOA) EXTRACT. BUTYLENE/ETHYLENE...
                  </p>

                </Attribute>
               
                }

                {
                 currentAttributeTab === TABS.REVIEWS && 
                  <Attribute>
                    <ReviewsContainer/>
                  </Attribute>
               
                } 

                {
                 currentAttributeTab === TABS.USAGE && 
                  <Attribute>
                 <p>
                 Gently apply to the entire face, neck and décollete before bedtime. No need to avoid the eye area, this product is soothing enough to tackle crow’s feet and under-eye bags.

                 For best results, give yourself a little love and apply twice daily.
                 </p>
                </Attribute>
               
                }
                   


              </div>
              
            </Grid>

            <Grid item xs={12}>
              
              <MoreProductsContainer></MoreProductsContainer>

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