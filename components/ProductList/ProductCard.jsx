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

export default function ProductCard(props){

    const {product} = props;

    const [rate,setRate] = useState(4);

    return (
      <Card variant="outlined" className={styles.cardclass}>
        <CardActionArea>
          <div className={styles.rectangle}>Earn 39.95 Reward Points</div>
          <CardMedia image={product.images[0].url} className={styles.productimg}/>
          <CardContent>
            <Typography variant="subtitle1" className={styles.producttitle}>
              {product.name}
            </Typography>
            <Typography variant="body1" className={styles.productprice} component="p">
              ${product.price}
            </Typography>
            {[...Array(rate)].map((el, index) => {
              return (
                <>
                  <StarIcon
                    className={styles.starcolor}
                    key={index}
                    fontSize="small"
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
                    fontSize="small"
                  />
                </>
              );
            })}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  
}

