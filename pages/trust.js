import React from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import TitleHeading from '../components/Ui/TitleHeading';
import GridDescription from '../components/Trust/Description';
import GridImage from '../components/Trust/Image';
import RedButton from "../components/Ui/RedButton";


const useStyles = makeStyles((theme)=>({
    root: {
        padding: '40px 10%',
            [theme.breakpoints.down('sm')]: {
                padding: '40px 14px',
            }
    },
    reverseColumn: {
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column-reverse'
        }   
    }
}),
{index:1})

export default function Login(){

    const classes = useStyles(); 
    
    return (
        <div className={classes.root}>

            <TitleHeading style={{ fontWeight: '600', margin: '24px 0px' }}>
                Why Trust Rénova Belle
            </TitleHeading>
            <br />

            <Grid container>
                <GridDescription
                    num='01'
                    title='The Star of the Show: Science'
                    description='Our secret’s out! The key to our show-stopping skincare is cutting-edge BIO-RÉNOVA CELL technology. Rénova Belle incorporated these revolutionary scientific breakthroughs into our skincare line and found that it dramatically reduced signs of aging, increased skin rejuvenation, escalated collagen production, and promoted cell turnover. Your skincare should moisturize and fortify your skin without stripping it!  Bio-engineered stem cells and EGF (Epidermal Growth Factor) molecules are scientifically proven to reverse aging, and heal damaged skin quicker and more efficiently. ' 
                >
                    <ul >
                            <li>
                                Our proprietary blends consist of:
                            </li>
                            <li>
                                Polypeptides + Vitamin C*
                            </li>
                            <li>
                                Retinol + Bakuchiol
                            </li>
                            <li>
                                Niacidamine + D-Panthenol
                            </li>
                            <li>
                                Hyaluronic Acid + Alpha Arbutin
                            </li>
                        </ul>

                        <br />

                        <p>
                        These lavish combinations make Rénova Belle one of the most effective anti-aging skincare lines on the market today.
                        </p>

                        <br />
                        <p>
                        *(15% L-Ascorbic Acid)
                        </p>

                </GridDescription>

                <GridImage 
                    img='trust-1.png'
                 />

                <div style={{ height: '20px' }} ></div>

            </Grid>

            <br /> <br />
            <Grid container className={classes.reverseColumn}>
                <GridImage 
                    img='trust-2.png'
                 />

                <GridDescription
                    num='02'
                    title='Developed by Skincare Experts'
                    description='Rénova Belle is devoted to using only the most luxurious formulas to help you feel great about your natural radiant skin. We care about product, not profit! Dr. Nathalia Zuluaga and Medical Aesthetician Katherine Zuluaga have years of specialized knowledge in healthy skincare and a passion for anti-aging skincare. With extensive experience in skincare products, spa treatments, and dermatological practices, Nathalia and Katherine share their in-depth knowledge with tips and tutorials, as well as spa and virtual services.  Even better: Treat yourself to a one-on-one consultation to make the most of your Rénova Belle experience.' 
                >
                    <p style={{ fontWeight: 500 }}>Limited spots are available, so act fast!
                    </p>
                    <br/>

                    <RedButton>Book Now</RedButton>

                </GridDescription>
            </Grid>

            <br /> <br />
            <Grid container >
                
                <GridDescription
                    num='03'
                    title='Results are a Beautiful Thing'
                    description='Rénova Belle allows you to completely transform your skincare routine by creating an easy-to-use product range that is backed by science and formulated to nourish and rejuvenate your skin. We believe that you deserve skincare that gets results and makes you feel and look good from the inside out. By choosing Rénova Belle, you are putting yourself at the forefront of enduring and ageless beauty.' 
                >
                    <p style={{ fontWeight: 500 }}>
                    Our mission is simple: We aim to deliver the results that we promise in order to revolutionize your skincare routine for good.
                    </p>
                    <br/>

                </GridDescription>

                <GridImage 
                    img='trust-3.png'
                 />

            </Grid>

            <br /> <br />
            <Grid container className={classes.reverseColumn}>
                <GridImage 
                    img='trust-4.png'
                 />

                <GridDescription
                    num='04'
                    title='Eco-Friendly Plant Based Formulas'
                    description='Rénova Belle products are vegan-friendly with natural ingredients that are formulated to give you incredible results. It’s important to us that our anti-aging skincare line nourishes your skin without causing harm to our planet. That’s why each and every product in our range is made primarily of nourishing fruit extracts and plant-based formulas tailored specifically to your skin type. Our products are phthalate-free, paraben-free, and sulfate-free, making them a perfect choice for conscientious skincare enthusiasts' 
                >
                    <p style={{ fontWeight: 500 }}>
                    Repairing + Strengthening + Glowing = Naturally Radiant Skin
                    </p>
                    <br/>

                </GridDescription>
            </Grid>
        </div>
    )

}