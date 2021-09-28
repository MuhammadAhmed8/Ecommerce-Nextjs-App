import { Grid, makeStyles } from "@material-ui/core";
import ServiceGrid from "./ServiceGrid";


const useStyles = makeStyles((theme) => ({
    serviceGrid: {
        backgroundColor: '#fff',
        padding: '30px 10px',
        margin: '20px 0px !important',
            [theme.breakpoints.down('sm')]: {
                padding: '20px 10px'
            }
    },
}),
{index:1})

export default function ServiceGridContainer(){
    const classes = useStyles(); 

    return(
        <Grid className={classes.serviceGrid} container spacing={2}>
                <ServiceGrid 
                    img='check_icon.svg'
                    text='30 Days Guarantee'
                />

                <ServiceGrid 
                    img='car_icon.svg'
                    text='Free Shipping'
                />

                <ServiceGrid 
                    img='calc_icon.svg'
                    text='Exclusive Offers'
                />

                <ServiceGrid 
                    img='gift.svg'
                    text='Free Gifts'
                />
        </Grid>
    )
}