import { Card, CardContent, CardHeader, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>(
    {
        pointsContainer:{
            display:'flex',
            flexWrap:'wrap',
            minHeight:'300px',
            justifyContent:'space-between',
            gap: 15
        },

        pointBox:{
            display:'flex',
            flexDirection: 'column',
            justifyContent:'space-between',
            alignItems: 'center',
            flexBasis:'48%',
            flex: 1,
            padding: "20px 0",
            border: "1px solid #C4C4C4",

            '& > p':{
                fontSize:'1.1rem'
            }
            
        },

        points:{
            fontSize: '100px',
            color: theme.palette.primary.main,
            fontWeight: 500

        },

        amount:{
            fontSize: '70px',
            color: theme.palette.primary.main,
            fontWeight: 500
        }


    }), {
        index: 1
    })

export default function YourPoints(props){
    const styles = useStyles();
    return(
    <>
            <Card>
                <CardHeader title="Your Points">
                </CardHeader>
                <CardContent>
                    
                    <div className={styles.pointsContainer}>
                        
                        <div className={styles.pointBox}>
                            <p>You get a total number of</p>
                            <div>
                                <h5 className={styles.points}>50</h5>
                                <p style={{textAlign:'center'}}>points</p>
                            </div>
                            <div>
                                <p>Points updated on: 01/02/2020</p>
                                <p>Your points expire on: 01/02/2020</p>
                            </div>
                        </div>

                        <div className={styles.pointBox}>
                            <p>Your points are worth</p>
                            <h5 className={styles.amount}>$155.00</h5>
                            <div>
                                <p>Points updated on: 01/02/2020</p>
                                <p>Your points expire on: 01/02/2020</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </CardContent>
            </Card>
    </>)
}