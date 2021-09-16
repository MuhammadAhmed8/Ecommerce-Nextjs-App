import React from 'react';
import { Grid, makeStyles, withStyles, Button} from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import ResultsGrid from './ResultsGrid';
import ServiceGrid from './ServiceGrid';
import BeautyGrid from './BeautyGrid';
import FavouriteProductsContainer from './FavouriteProductsContainer';
import ServiceGridContainer from './ServiceGridContainer';
import ContactSection from './ContactSection';
import ImageGrid from './ImageGrid';


const useStyles = makeStyles(() => ({
    root: {
        margin: '0px',
        textAlign: 'center'
    },
    text: {
        margin: '20px 5px',
        fontSize: '1.2rem',
        fontFamily: 'Helvetica',
        lineHeight: '1.8rem',
        textAlign: 'center',
    },
    button: {
        padding: '10px 50px',
    },
    resultGrid: {
        padding: '30px 0px',
        textAlign: 'left',
    },
    heading: {
        fontSize: '2.4rem',
        fontFamily: 'Times',
        fontWeight: '300',
        marginBottom: '20px'
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


const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[900]),
      backgroundColor: red[900],
      '&:hover': {
        backgroundColor: '#ccc',
        color: '#222'
      },
      fontSize: '1.2rem',
      fontWeight: '600',
      fontFamily: 'Helvetica'
    },
  }))(Button);

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

                <ColorButton className={classes.button}
                    variant="contained"
                    color='primary'
                    value='Shop Now'
                > Shop Now
                </ColorButton>
                <br></br>
                <br></br>

            <Grid className={classes.resultGrid} container spacing={5}>
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

            <ServiceGridContainer />

            <h1 className={classes.heading}>Our Beauty Lines</h1>
            
            <Grid container spacing={2}>
                <BeautyGrid 
                    img='beauty_1.png'
                    heading='Face'                
                >
                    <ColorButton className={classes.beautybtn}
                        variant="contained"
                        color='primary'
                        value='Explore'
                    > Explore
                    </ColorButton>

                </BeautyGrid>

                <BeautyGrid 
                    img='beauty_2.png'
                    heading='Hair'                
                >
                    <p>Coming Soon</p>
                </BeautyGrid>
            </Grid>

            <FavouriteProductsContainer />

            <ContactSection />

            <h1 className={classes.heading}>Follow Us On Instragram</h1>

            <ColorButton className={classes.instabtn}
                    variant="contained"
                    color='primary'
                    value= '@renovabelle'
                > @renovabelle
            </ColorButton>

            <br></br><br></br>
            <Grid container spacing={3}>
                <ImageGrid img='fav_1.png' />
                <ImageGrid img='fav_2.png' />
                <ImageGrid img='fav_3.png' />
                <ImageGrid img='fav_4.png' />
            </Grid>

            </div>
    )
}
