import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(()=>(
    {
        image:{
            width:120,
            height: 120,
            borderRadius: '50%',
        },
    
        profile:{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexDirection:'column',
            textAlign:'center'
        },
    
        profile:{
            padding: "20px",
            marginBottom: "30px"
    
        },
    
        portalSidebarList:{
            textAlign:'center',
        },
    
        portalSidebarList:{
            "& li":{
                borderTop: "2px solid #C4C4C4",
                textAlign:'center',
                padding: '8px',
            },
    
            "& :nth-child(5)":{
                borderBottom: "2px solid #C4C4C4"
            }
        }
    }), {
        index: 1
    })

export default function ProfileSidebar(){
    const styles = useStyles();
    return(
    <>
            <div className={styles.profile}>
                <div style={{textAlign:"center"}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                        className={styles.image}></img>
                </div>
                <p style={{textAlign:'center'}}>JohnDoe</p>

            </div>
            <ul className={styles.portalSidebarList}>
                <li className={styles.active}><button>My Account</button></li>
                <li><button>Order History</button></li>
                <li><button>Points</button></li>
                <li><button>Wishlist</button></li>
                <li><button>Edit Profile</button></li>
            </ul>
    </>)
}