import { Grid, makeStyles } from "@material-ui/core";
import ProfileSidebar from "../../components/Customer/profile/ProfileSidebar";
import YourPoints from "../../components/Customer/points/YourPoints";


const useStyles = makeStyles(()=>(
{
   
}), {
    index: 1
})

export default function MyAccount(props){

    const styles = useStyles();

    return (
        <div className={styles.portal}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} md={8}>
                    <YourPoints></YourPoints>
                </Grid>
            </Grid>
                
                
        </div>
    )    
}