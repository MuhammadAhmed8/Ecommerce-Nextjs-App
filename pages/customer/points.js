import { Box, Grid, makeStyles } from "@material-ui/core";
import ProfileSidebar from "../../components/Customer/profile/ProfileSidebar";
import YourPoints from "../../components/Customer/points/YourPoints";
import PointsHistory from "../../components/Customer/Points/PointsHistory";


const useStyles = makeStyles(()=>(
{
   
}), {
    index: 1
})

export default function Points(props){

    const styles = useStyles();

    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <Box style={{margin:"20px 0"}}>
                        <h2>Your Points</h2>
                    </Box>
                    <YourPoints></YourPoints>
                    <br></br>
                    <Box style={{margin:"20px 0"}}>
                        <h2>Points History</h2>
                    </Box>
                    <PointsHistory></PointsHistory>
                </Grid>
            </Grid>
                
                
        </div>
    )    
}