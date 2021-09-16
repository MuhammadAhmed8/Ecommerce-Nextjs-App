import HistoryItem from "../../components/Customer/OrderHistory/HistoryItem";
import OrderItem from "../../components/Customer/OrderHistory/OrderItem";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import ProfileSidebar from "../../components/Customer/profile/ProfileSidebar";
import axios from "axios";
import config from "../../utils/config";
import { useEffect, useState } from "react";

export default function History(props){

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
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} sm={8} md={9} style={{minHeight:400}}>
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
                
                
        </div>
    )    
}