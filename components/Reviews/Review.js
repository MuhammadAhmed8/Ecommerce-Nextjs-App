import { makeStyles, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

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

export default function Review(props){

    const classes = useStyles();

    return (
        <div>
            <div className={classes.reviewBox}>
                <div className={classes.reviewMeta}>
                    <Typography variant="h4" style={{fontSize:"1.4rem"}}> John Doe</Typography>
                    <Typography>
                    
                    {[...Array(4)].map((el, index) => {
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
                    {[...Array(5 - 4)].map((el, index) => {
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
                        5 days ago
                    </Typography>
                </div>

                <div className={classes.reviewContent}>
                    
                    <div>
                        <Typography variant="body1">
                        Results with this moisturizer are almost immediate! Instant hydration and plumpness and better skin texture overnight. $70 is a lot to spend but it would be 5 stats otherwise
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}