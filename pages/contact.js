import { Grid, makeStyles, Select, InputLabel, MenuItem, FormControl, Container } from "@material-ui/core";
import { useState } from "react";
import InputField from "../components/Ui/InputField";
import RedButton from "../components/Ui/RedButton";
import TitleHeading from "../components/Ui/TitleHeading";
import Video from "../components/Ui/Video";


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        textAlign: 'center',
        padding: '30px 0'
    },
}),
{index:1})

export default function Contact(){
    const classes = useStyles(); 

    const [issue, setIssue] = useState('');

    const setIssueHandler = (event) => {
        setIssue(event.target.value);
    };

    return(
        <>
        <Video src='img/contact video.mp4' type='video/mp4' />
        <div className={classes.root}>
            <Container maxWidth="md">
            <TitleHeading>
                Contact Us
            </TitleHeading>

            <p style={{ fontSize: '1.4rem', lineHeight: '2.2rem'}}> 
                Use the form at the bottom of the page to contact our Customer Care team. We’ll get back to you within 48 business hours.
            </p>
            <br></br>
            <br></br>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <InputField
                        fullWidth
                        label="First Name"
                        name="firstName"   
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        fullWidth
                        label="Last Name"
                        name="lastName"    
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"    
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        fullWidth
                        label="Phone No."
                        name="phone"    
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        fullWidth
                        label="Order Number (If Applicable)"
                        name="orderNum"    
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label' 
                            style={{padding: '0px 0px 0px 10px'}}>
                        Issue
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Issue"
                        onChange={setIssueHandler}
                        
                        value={issue}
                        variant='outlined'
                    >
                        <MenuItem value="Online order">Online order</MenuItem>
                        <MenuItem value="Shipping &amp; Delivery">Shipping &amp; Delivery</MenuItem>
                        <MenuItem value="Product Information">Product Information</MenuItem>
                        <MenuItem value="Promotions">Promotions</MenuItem>
                        <MenuItem value="Returns">Returns</MenuItem>
                        <MenuItem value="Website / Tech Support">Website / Tech Support</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} >
                    <InputField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                    />
                </Grid>

            </Grid>

            <br />
            <div style={{ textAlign: 'left' }}>
                <RedButton style={{ fontSize: '1.3rem' }} >
                    Send Message
                </RedButton>
            </div>
            <br />
            </Container>
        </div>
        </>
    )
}