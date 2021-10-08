import HistoryItem from "../../components/Customer/OrderHistory/HistoryItem";
import OrderItem from "../../components/Customer/OrderHistory/OrderItem";
import { Box, CircularProgress, Container, Grid, makeStyles } from "@material-ui/core";
import ProfileSidebar from "../../components/Customer/Profile/ProfileSidebar";
import axios from "axios";
import config from "../../utils/config";
import { useEffect, useState } from "react";


const useStyles = makeStyles((theme)=>(
{
    container: {
        padding: "14px",
        [theme.breakpoints.down('sm')]:{
            padding: "14px 0"
        }
    }  
}), {
    index: 1
})

export default function History(props){

    const classes = useStyles();

    const [orderHistory, setOrderHistory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchOrderHistory(){
            const {data} = await axios.get(config.ajaxBase + "customer/order-history",{
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('rht')
                },
                withCredentials: true
            })

            setOrderHistory(data.orderHistory);
            setLoading(false);
            console.log(data,"orderhistrory");
        }

        fetchOrderHistory();
        
        
    }, [])

    return (
        <Container style={{marginTop:60}}>
            <Grid container>
                <Grid item xs={12} sm={4} md={3} className={classes.container}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} sm={8} md={9} style={{minHeight:400}} className={classes.container}>
                
                <Box style={{padding:10, marginBottom: 20, background:"#fff"}}>
                        <h2 style={{padding:"0 5px"}}>Your Orders</h2>
                </Box>
                <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                    {loading && <CircularProgress ></CircularProgress>}
                </div>
                {
                    orderHistory && orderHistory.data.map((history, index) => (
                        <HistoryItem key={index} data={history}>
                            {
                                history.items.map((item)=>(
                                    <OrderItem key={item.id} item={item} />

                                ))
                            }
                            
                        </HistoryItem>
                    ))
                }
               
                </Grid>
            </Grid>
                
                
        </Container>
    )    
}