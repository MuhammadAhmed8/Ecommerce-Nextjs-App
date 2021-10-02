import { Grid, makeStyles, withStyles, Button } from "@material-ui/core";
import FaqHeader from "../components/Faq/FaqHeader";
import QuestionsContainer from "../components/Faq/QuestionsContainer";
import TopicContainer from "../components/Faq/TopicContainer";
import RedButton from "../components/Ui/RedButton";
import TitleHeading from "../components/Ui/TitleHeading";


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        textAlign: 'center',
        paddingBottom: '40px'
    },
    btnContact: {
        fontSize: '1.3rem',
        padding: '8px 30px',
    }, 
    gap: {
        margin: '40px 0px 10px',
        fontFamily: 'inherit'
    }
}),
{index:1})

export default function Faq(){
    const classes = useStyles(); 

   //const [topic, setTopic] = useState(null);

    return(
        <div className={classes.root}>
            <FaqHeader />
            <TopicContainer />
            <QuestionsContainer />

            <div className={classes.gap}>
                <TitleHeading>
                    Couldn’t find an answer?
                </TitleHeading>
            </div>
            
            <RedButton className={classes.btnContact}>
                Contact Us
            </RedButton>
            <br></br>
            <br></br>
        </div>
    )
}