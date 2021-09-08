import HistoryItem from "../../components/Customer/OrderHistory/HistoryItem";
import OrderItem from "../../components/Customer/OrderHistory/OrderItem";
import { Grid, makeStyles } from "@material-ui/core";
import ProfileSidebar from "../../components/Customer/profile/ProfileSidebar";

export default function History(props){


    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                
                <HistoryItem>
                    <OrderItem item={{
                            name: 'Episoda Mosituerizer Gel',
                            price_total: 150,
                            product_image:[
                                {
                                    url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576095586-tc-lrp-hydra-1576095580.jpg?crop=1xw:1xh;center,top&resize=480:*'
                                }
                            ]
                            }} />
                    
                   
                </HistoryItem>
                                <br></br>
                <HistoryItem>
                    <OrderItem item={{
                            name: 'Episoda Mosituerizer Gel',
                            price_total: 150,
                            product_image:[
                                {
                                    url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576095586-tc-lrp-hydra-1576095580.jpg?crop=1xw:1xh;center,top&resize=480:*'
                                }
                            ]
                            }} />
                    
                    <OrderItem item={{
                            name: 'Episoda Mosituerizer Gel',
                            price_total: 150,
                            product_image:[
                                {
                                    url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576095586-tc-lrp-hydra-1576095580.jpg?crop=1xw:1xh;center,top&resize=480:*'
                                }
                            ]
                            }} />
                    
                </HistoryItem>
                </Grid>
            </Grid>
                
                
        </div>
    )    
}