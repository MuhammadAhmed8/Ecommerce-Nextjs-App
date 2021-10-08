import { Grid, Typography } from "@material-ui/core"
import React, {useState} from "react";

export default function HistoryItem(props){

    const {number, grand_total, tracking_number, date_placed} = props.data
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div style={{background:"#fff", marginBottom:20}}>
            <div style={
            {
            display:'flex', 
            justifyContent:"space-around",
            alignItems:'center',
            flexWrap:'wrap',
            padding:10,
            }}>
                <p><b>Order#:</b> {number}</p>
                <p><b>Order Placed:</b> {date_placed}</p>
                <p><b>Total: </b> {`${grand_total}`}</p>
                <p><b>Tracking#: </b> {tracking_number}</p>
            </div>
            <hr></hr>
            {props.children}
            <p style={{textAlign:'right', padding:"0px 25px 25px 25px", cursor:"pointer"}} onClick={()=>setShowDetails(!showDetails)}>
               {!showDetails ? "Show Details": "Hide Details"} 
            </p>
            {showDetails && <div style={{padding: 20}}>
                <div style={{marginBottom:20}}>
                <Typography variant="h5" style={{fontSize:16, paddingBottom: 5}}>Order Summary</Typography>
                <hr></hr>
                </div>
                <Grid container>
                    <Grid item xs={12} md={6}>
                    <b>Items: </b> $37.98
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <b>Shipping & Handling: </b> $37.98

                    </Grid>
                    <Grid item xs={12} md={6}>
                    <b>Your Coupon Savings: </b> $37.98

                    </Grid>
                    <Grid item xs={12} md={6}>
                    <b>Total Before Tax: </b> $37.98

                    </Grid>
                    <Grid item xs={12} md={6}>
                    <b>Estimated Tax Collected: </b> $37.98

                    </Grid>
                    <Grid item xs={12} md={6}>
                    <b>Order Total: </b> $37.98

                    </Grid>
                    <Grid item xs={12} md={6}>
                    <b>Items: </b> $37.98

                    </Grid>
                    <Grid item xs={12} md={6}>
                    <b>Shipping Address: </b>John Doe, 8852 Cypress Lane, Brooklyn, NY 11224

                    </Grid>
                    <Grid item xs={12} md={6}>
                    <b>Billing Address: </b>John Doe, 8852 Cypress Lane, Brooklyn, NY 11224

                    </Grid>
                </Grid>
            </div>}
        </div>
    )
}