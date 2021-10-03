import React, { useState } from 'react';
import { Grid, Input, makeStyles, Typography} from '@material-ui/core';
import { Rating } from 'react-simple-star-rating';
import InputField from '../Ui/InputField';
import RedButton from '../Ui/RedButton';

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
        padding: '10px 5px',
        width: '400px',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
    }
}),
{index:1})

export default function ReviewForm(props){

    const classes = useStyles(); 
    const [rating, setRating] = useState(0) // initial rating value
    
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
      }

    return (
        <div className={classes.root}>
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
                <span className={classes.btext}>Quality</span>
                <Rating 
                    onClick={handleRating} 
                    ratingValue={rating}
                    filColor='#ff5501'
                />
            </div>
            
            <div>
                <span className={classes.btext}>
                    NickName
                    <span className={classes.redAsterisk}> *</span>
                </span>

                <InputField 
                    name="nickname"
                    id="nickname" 
                    type='string'
                    variant='outlined'
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    // error={formik.touched.email && Boolean(formik.errors.email)}
                    // helperText={formik.touched.email && formik.errors.email}
                    style={{ 
                        marginBottom: '10px',
                    }}
                    inputProps= {{
                        className: classes.input
                    }}
                />
            </div>

            <div>
                <span className={classes.btext}>
                    Summary
                    <span className={classes.redAsterisk}> *</span>
                </span>

                <InputField 
                    name="summary"
                    id="summary" 
                    type='string'
                    variant='outlined'
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    // error={formik.touched.email && Boolean(formik.errors.email)}
                    // helperText={formik.touched.email && formik.errors.email}
                    style={{ 
                        marginBottom: '10px',
                    }}
                    inputProps= {{
                        className: classes.input
                    }}
                />
            </div>

            <div>
                <span className={classes.btext}>
                    Review
                    <span className={classes.redAsterisk}> *</span>
                </span>

                <InputField 
                    name="review"
                    id="review" 
                    type='string'
                    variant='outlined'
                    rows='3'
                    multiline
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    // error={formik.touched.email && Boolean(formik.errors.email)}
                    // helperText={formik.touched.email && formik.errors.email}
                    style={{ 
                        marginBottom: '10px',
                    }}
                    inputProps= {{
                        className: classes.input
                    }}
                />
            </div>
            <br></br>

            <RedButton>
                Submit Review
            </RedButton>

        </div>
    )

}