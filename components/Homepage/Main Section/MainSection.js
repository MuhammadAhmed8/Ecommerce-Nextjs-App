import React from 'react';
import { Grid, makeStyles} from "@material-ui/core";

import ResultsGrid from './ResultsGrid';
import BeautyGrid from './BeautyGrid';
import FavouriteProductsContainer from './FavouriteProductsContainer';
import ServiceGridContainer from './ServiceGridContainer';
import ImageGrid from './ImageGrid';
import BackImageCard from './BackImageCard';

import RedButton from '../../Ui/RedButton';
import TitleHeading from '../../Ui/TitleHeading';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0px',
        textAlign: 'center',
        padding: '20px 0px'
    },
    text: {
        margin: '20px 5px',
        fontSize: '1.4rem',
        fontFamily: 'Helvetica',
        lineHeight: '2rem',
        textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
                lineHeight: '1.4rem',
            }
    },
    button: {
        padding: '10px 50px',
    },
    resultGrid: {
        padding: '10px 0px',
        textAlign: 'left',
    },
    beautyContainer: {
        margin: '30px 0px'
    },
    beautybtn: {
        padding: '10px 20px',
        textTransform: 'capitalize',
        fontSize: '1.3rem',
        fontWeight: '400'
    },
    instabtn: {
        textTransform: 'lowercase',
        padding: '10px 30px'
    }
}),
{index:1})

export default function MainSection(props){

    const classes = useStyles(); 
    const advantages =  ['Stem Cell + EGF', 
                        'Collagen + Polypeptides', 
                        'Vitamin C Refreshers',
                        'Revved Up Retinol'
                        ]

    return(
            <div className={classes.root} >
                <p className={classes.text}>
                    Rénova Belle is an anti-wrinkle and anti-aging skincare powerhouse. Scientifically-backed ingredients such as stem cells and EGF (Epidermal Growth Factor) are utilized in plant-based serums, exfoliators, and moisturizers tailored specifically to your skin. Our luxurious anti-aging formulas will leave your skin soft, supple, and glowing like never before.
                </p>
                <br></br>

                <RedButton 
                    style= {{ fontSize: '1.5rem', padding: '10px 40px', fontWeight: 'bold'}}
                >
                    Shop Now 
                </RedButton>
                <br></br>
                <br></br>

            <Grid className={classes.resultGrid} container spacing={2}>
                <Grid item xs={12} sm={6} >
                <ResultsGrid 
                    img = 'img/result_ (1).png'
                    heading= 'Results are a Beautiful Thing'
                    paragraph= 'Rénova Belle is tailored to your specific skin in a powerful regiment that guarantees beautiful, radiant results, and reveals your youthful glow.'
                />
                </Grid>

                <Grid item xs={12} sm={6} >
                <ResultsGrid 
                    img= 'img/result_ (2).png'
                    heading= 'Backed by Science. Bottled by Rénova.'
                    paragraph= 'Rénova Belle is dermatologically tested anti-aging skincare that uses scientifically proven ingredients to bring out your naturally glowing skin. Together, they are unstoppable.' 
                    advantages = {advantages}
                >
                </ResultsGrid>
                </Grid>

            </Grid>

            <BackImageCard 
                image = "img/why_trust.png"
                heading = {["Why Trust", <br></br>, "RÉNOVA BELLE"]}
                buttonText = "Read More"
            />

            <ServiceGridContainer />

            <div className={classes.beautyContainer}>
                <TitleHeading>
                    Our Beauty Lines
                </TitleHeading>
                <Grid container spacing={2}>
                    <BeautyGrid 
                        img='beauty_1.png'
                        heading='Face'                
                    >
                        <RedButton>
                            Explore
                        </RedButton>

                    </BeautyGrid>

                    <BeautyGrid 
                        img='beauty_2.png'
                        heading='Hair'                
                    >
                        <p>Coming Soon</p>
                    </BeautyGrid>
                </Grid>

            </div>

            <FavouriteProductsContainer />

            <BackImageCard 
                image = "img/ask_anything.png"
                heading = "Ask Us Anything"
                text= "Whether you're seeking skincare advice, need help tracking an order, or just have a quick question, our Team is here to help!"
                buttonText = "Contact Us"
            />

            <TitleHeading>
                Follow Us On Instragram
            </TitleHeading>
            
            <RedButton 
                style={{ textTransform: 'lowercase', fontSize: '1.2rem', padding: '8px 20px' }}
            >
                @renovabelle
            </RedButton>

            <br></br><br></br>
            <Grid container spacing={2}>
                <ImageGrid img='fav_1.png' />
                <ImageGrid img='fav_2.png' />
                <ImageGrid img='fav_3.png' />
                <ImageGrid img='fav_4.png' />
            </Grid>

            </div>
    )
}
