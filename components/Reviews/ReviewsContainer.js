import { makeStyles, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Review from "./Review";

const useStyles = makeStyles((theme)=>({
    
      
}))

export default function ReviewsContainer(props){

    const classes = useStyles();

    return (
        <div>
            <Review></Review>
            <br></br>
            <hr></hr>
            <br></br>
            <Review></Review>
            <br></br>
            <hr></hr>
        </div>
    )
}