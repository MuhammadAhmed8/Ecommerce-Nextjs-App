import { makeStyles, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {timeSince} from "../../utils/datetime";

const useStyles = makeStyles((theme)=>({
    reviewBox: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        flexWrap: 'wrap',
        
    },

    reviewMeta:{
        display:'flex',
        alignItems:'center',
        gap: 10
        
    },
    reviewContent:{
        flex: 1,
        marginTop:14
    },

    starcolor: {
        color: '#facb54 !important',
        width: '17.7px !important',
        height: '18px !important',
        top:2,
        position:'relative'
    }
      
}))

export default function Review({data, ...props}){

    const classes = useStyles();

    if(!data) return null;
    return (
        <div>
            <div className={classes.reviewBox}>
                <div className={classes.reviewMeta}>
                    <Typography variant="h5">Ken Adams</Typography>
                    <Typography>
                    
                    {[...Array(data.rating)].map((el, index) => {
                    return (
                        <>
                        <StarIcon
                            className={classes.starcolor}
                            key={index}
                            fontSize="small"
                        />
                        </>
                    );
                    })}
                    {[...Array(5 - data.rating)].map((el, index) => {
                    return (
                        <>
                        <StarBorderIcon
                            className={classes.starcolor}
                            key={index}
                            fontSize="small"
                        />
                        </>
                    );
                    })}
                    </Typography>

                </div>
                <div>
                    <Typography variant="caption">
                        {timeSince(new Date(data.date_created))}
                    </Typography>
                </div>

                <div className={classes.reviewContent}>
                    
                    <div>
                        <Typography variant="body1">
                            {data.content}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}