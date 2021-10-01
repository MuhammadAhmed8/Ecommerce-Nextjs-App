import * as styles from "./ProductList.module.css";
import React, { useState, useEffect } from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useMediaQuery } from 'react-responsive'

export default function ProductCard(props){

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const {product} = props;

    console.log("Product image: ", product.images);

    const [rate,setRate] = useState(4);

    return (
      <Card variant="outlined" className={styles.cardclass}>
        <CardActionArea>
          <div className={styles.rectangle}>Earn 39.95 Reward Points</div>
          <CardMedia image={product.images[0].url} className={styles.productimg}/>
          <CardContent>
            <h3 className={styles.producttitle}>
              {product.name}
            </h3>
            <p className={styles.productprice}>
              ${product.price}
            </p>
            {[...Array(rate)].map((el, index) => {
              return (
                <>
                  <StarIcon
                    className={styles.starcolor}
                    key={index}
                    fontSize={isTabletOrMobile ? "small": "medium"}
                  />
                </>
              );
            })}
            {[...Array(5 - rate)].map((el, index) => {
              return (
                <>
                  <StarBorderIcon
                    className={styles.starcolor}
                    key={index}
                    fontSize={isTabletOrMobile ? "small": "medium"}
                  />
                </>
              );
            })}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  
}

