import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import TitleHeading from "../Ui/TitleHeading";


const useStyles = makeStyles(() => ({
    background: {
        background: `url('img/contact_img.png')`,
        height: '400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textCard: {
        padding: '40px 35px',
        backgroundColor: "#fff",
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        margin: 'auto'
    },
    text: {
        margin: '20px 5px',
        fontSize: '1.2rem',
        fontFamily: 'Helvetica',
        lineHeight: '1.8rem',
    },
    textfield: {
        borderRadius: '50px'
    }
}),
{index:1})

export default function FaqHeader(){
    const classes = useStyles(); 

    return(
        <>
        <div className={classes.background}>
            <div className={classes.textCard}>
                <TitleHeading>How can we help you?</TitleHeading>
                <TextField 
                    className={classes.textfield}
                    id="input-with-icon-textfield"
                    placeholder='Search for keywords'
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchRounded />
                        </InputAdornment>
                    ),
                    }}
                />
            </div>
        </div>
        </>
    )
}