import { Grid, makeStyles } from "@material-ui/core";
import ProfileSidebar from "../../components/Customer/profile/ProfileSidebar";
import YourPoints from "../../components/Customer/points/YourPoints";
import useCustomer from "./hooks/useCustomer";


const useStyles = makeStyles(()=>(
{
   
}), {
    index: 1
})

export default function MyAccount(props){

    const styles = useStyles();

    useEffect()

    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <YourPoints></YourPoints>
                </Grid>
            </Grid>
                
                
        </div>
    )    
}