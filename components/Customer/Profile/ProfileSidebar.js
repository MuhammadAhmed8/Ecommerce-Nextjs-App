import { Grid, Link, makeStyles } from "@material-ui/core";
import NextLink from 'next/link';

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
            textAlign:'center',
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
        index: 2
    })

export default function ProfileSidebar(){
    const styles = useStyles();
    return(
    <div style={{maxWidth:"400px"}}>
            <div className={styles.profile}>
                <div style={{textAlign:"center"}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                        className={styles.image}></img>
                </div>
                <p style={{textAlign:'center'}}>JohnDoe</p>

            </div>
            <ul className={styles.portalSidebarList}>
                <NextLink href="/customer/my-account">
                    <Link>
                        <li>
                            My Account

                        </li>
                    </Link>
                </NextLink>

                <NextLink href="/customer/order-history">
                    <Link>
                        <li>
                            Order History

                        </li>
                    </Link>
                </NextLink>

                <NextLink href="/customer/points">
                    <Link>
                        <li>
                            Points

                        </li>
                    </Link>
                </NextLink>

                <NextLink href="/customer/wishlist">
                    <Link>
                        <li>
                            Wishlist

                        </li>
                    </Link>
                </NextLink>

                
            </ul>
    </div>)
}