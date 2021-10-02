import { Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px 10%',
        backgroundColor: '#fff',
        height: '100%',
            [theme.breakpoints.down('sm')]: {
                padding:'20px 16px'
            }
    },
    upperSection: {
        display: 'flex',
        alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            }
    },
    numSection: {
        width: '35%',
        textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
    },
    numHeading: {
        margin: 'auto',
        fontSize: '4.3rem',
        color: '#ca0303',
        fontStyle: 'italic',
        height: '5rem',
        fontFamily: 'Times',
            [theme.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
                height: '3.5rem'
            }
    },
    titleSection: {
        width: '65%',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
    },
    titleHeading: {
        margin: 'auto',
        fontSize: '2.7rem',
        fontFamily: 'Times',
        lineHeight: '3.2rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.6rem',
                lineHeight: '2rem'
            }
    },
    description: {
        padding: '14px 0px',
        fontFamily: 'helvetica',
        fontSize: '1.05rem',
        fontWeight: '300',
        color: '#333',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem',
            }
    }
}),
{index:1})

export default function GridDescription(props){
    const classes = useStyles();

    return(
            <Grid item xs={12} sm={8}>
                <div className={classes.root}>
                    
                    <div className={classes.upperSection}>
                        <div className={classes.numSection}>
                            <h2 className={classes.numHeading}>{'#' + props.num}</h2>
                        </div>

                        <div className={classes.titleSection}>
                            <h2 className={classes.titleHeading}>
                                {props.title}
                            </h2>
                        </div>
                    
                    </div>

                    <div className={classes.description} >
                        <p>
                            {props.description}
                        </p>
                        <br />

                        {props.children}

                    </div>

                </div>

            </Grid>          
    )
}