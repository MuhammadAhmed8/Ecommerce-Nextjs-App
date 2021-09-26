import { Box, Container, Grid, makeStyles } from "@material-ui/core";
// import ProfileSidebar from "../../components/Customer/profile/ProfileSidebar";
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
        <Container spacing={100} style={{marginTop:60}}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3}>
                    {/* <ProfileSidebar></ProfileSidebar> */}
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <Box style={{padding:10, marginBottom: 20, background:"#fff"}}>
                        <h2>Your Points</h2>
                    </Box>
                    <YourPoints></YourPoints>
                    <br></br><br></br>
                    <Box style={{padding:10, marginBottom: 20, background:"#fff"}}>
                        <h2>Points History</h2>
                    </Box>
                    <PointsHistory></PointsHistory>
                </Grid>
            </Grid>
                
                
        </Container>
    )    
}