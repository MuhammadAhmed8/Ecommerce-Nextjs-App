import { makeStyles, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from "axios";
import { useState, useEffect } from "react";
import Review from "./Review";
import config from "../../utils/config";

const useStyles = makeStyles((theme)=>({
    
      
}))

export default function ReviewsContainer({reviews}){

    const classes = useStyles();
    return (
        <div>
            {
                !reviews ? "No reviews yet. ": 
                reviews.map((review)=>{
                    return (
                        <div key={review._id} >
                            <Review data={review}></Review>
                            <br></br>
                            <hr></hr>
                            <br></br>
                        </div>
                      
                    )
                })
                
            }
       
            <br></br>
       
        </div>
    )
}