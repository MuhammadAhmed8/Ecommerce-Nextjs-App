import React from 'react';
import NextLink from 'next/link';
import { Link, Grid, makeStyles } from '@material-ui/core';
import LinkTag from './LinkTag';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from './newsletter';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#e9e3e1',
        padding: '20px 40px',
        margin: '40px 0px 0px',
            [theme.breakpoints.down("sm")]: {
                textAlign: 'center'
            }
    },
    heading: {
        fontSize: '1.1rem',
        padding: '10px 0px',
        fontWeight: '600',
        fontFamily: 'Helvetica',
        color: '#333',
    },
    textfield: {
        padding: '8px',
        width: '60%',
        maxWidth: '250px',
        border: '1px solid #444',
        margin: '0px 5px'
    },
    button: {
        backgroundColor: '#fff',
        padding: '8px',
        border: '1px solid #ccc'
    }
}),
{index:1})

let customerService = [	
    {title: 'FAQs', link: '/faq'},
    {title: 'Privacy Policy', link: '/privacy'},
    {title: 'Terms of Use', link: '/terms'},
    {title: 'Rewards Program', link: '#'},
    {title: 'Contact Us', link: '/contact'},
]

let account = [	
    {title: 'My Account', link: '#'},
    {title: 'Cart', link: '/cart'},
    {title: 'Checkout', link: '/checkout/shipping'},
    {title: 'My Orders', link: '#'},
]

export default function Footer(){
    
    const MAILCHIMP_URL = 'https://gmail.us5.list-manage.com/subscribe/post?u=542cbd7b05e62340b6bd1d1d1&amp;id=0c4f7c65eb'
    const customerServiceTag = customerService.map(
                                (obj) => <LinkTag title={obj.title} link={obj.link} />)

    const accountTag = account.map(
                                (obj) => <LinkTag title={obj.title} link={obj.link} />)


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} >
                    <h3 className={classes.heading} >
                        ABOUT US
                    </h3>
                    <p>
                        The Rénova Belle skin care line is made from nourishing fruit extracts and plant-based formulas tailored toward your skin. Our formulas are free of phthalates, parabens, and sulfates. Results are a Beautiful thing.
                    </p>
                </Grid>

                <Grid item xs={6} sm={3} md={2} >
                    <h3 className={classes.heading} >
                        CUSTOMER SERVICE
                    </h3>
                    {customerServiceTag}
                    
                </Grid>

                <Grid item xs={6} sm={3} md={2} >
                    <h3 className={classes.heading} >
                        ACCOUNT
                    </h3>
                    {accountTag}

                </Grid>

                <Grid item xs={12} sm={6} md={3} >
                    <h3 className={classes.heading} >
                        NEWSLETTER
                    </h3>
                    <p>
                        Sign up for discounts. Plus exclusive access to new products & more!
                    </p>
                    <br></br>

                    <Newsletter />
                </Grid>
            </Grid>
        </div>
    )

}