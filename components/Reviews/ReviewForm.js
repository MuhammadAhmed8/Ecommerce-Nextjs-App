import React, { useState } from 'react';
import { Grid, Input, makeStyles, Typography} from '@material-ui/core';
import { Rating } from 'react-simple-star-rating';
import InputField from '../Ui/InputField';
import RedButton from '../Ui/RedButton';
import axios from 'axios';
import config from "../../utils/config";

const useStyles = makeStyles((theme)=>({
    root: {
        margin: '20px 0px'
    },
    text: {
        fontSize: '1rem',
    }, 
    title: {
        fontSize: '1.1rem',
        padding: '5px 0px'
    },
    redAsterisk: {
        color: 'red'
    },
    btext: {
        padding: '5px 0px',
        fontWeight: '600',
        display: 'block'
    },
    input: {
        minHeight: 30,
        maxWidth: 500
        
    }
}),
{index:1})

export default function ReviewForm(props){

    const classes = useStyles(); 
    const [rating, setRating] = useState(5) // initial rating value
    const [review, setReview] = useState(null);
    
    const handleRating = (rate) => {
        if(rate < 1 || rate > 5){
            rate = 5
        }
    
        setRating(rate)
    }

    const handleReviewChange = (e) => {
        let v = e.target.value;
        setReview(v)
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
      
        axios.post(config.ajaxBase + `products/${props.productId}/reviews`,{
            content: review,
            rating
        },
        {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('rt')
            },
            withCredentials: true
        })
        .then((res)=>{
            alert("Your review has been submitted.")
        })
        .catch(e => {
            if(e.response.status === 403 ){
                alert("Unauthorized")
            }
        })
    }


    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
            <p className={classes.text}>
                You&apos;re reviewing:
            </p>
            <b className= {classes.title}>{props.name}</b>
            <br></br>
            <br></br>

            <div style={{margin: '0px'}}>
                <b>
                    Your Rating 
                </b>
                <span className={ classes.redAsterisk}> *</span>
            </div>
            <br></br>

            <div>
                <span className={classes.btext}>Quality
                <span className={classes.redAsterisk}> * 
                </span>
                </span>
                <Rating 
                    onClick={handleRating} 
                    ratingValue={rating}
                    filColor='#ff5501'
                />
            </div>
            
            <div>
                
            </div>

            <br></br>
            <div>
                <span className={classes.btext}>
                    Review
                    <span className={classes.redAsterisk}> *</span>
                </span>

                <InputField 
                    fullWidth
                    name="review"
                    id="review" 
                    type='string'
                    variant='outlined'
                    rows='6'
                    multiline
                    required
                    value={review}
                    onChange={handleReviewChange}
                    style={{ 
                        marginBottom: '10px',
                        maxWidth: 700,
                    }}
                    inputProps= {{
                        className: classes.input
                    }}
                />
            </div>
            <br></br>

            <RedButton type="submit">
                Submit Review
            </RedButton>
            </form>
        </div>
    )

}
