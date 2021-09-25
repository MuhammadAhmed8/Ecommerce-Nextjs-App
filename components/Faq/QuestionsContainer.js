import {  makeStyles } from "@material-ui/core";
import TitleHeading from "../Ui/TitleHeading";
import { ExpandMore } from "@material-ui/icons";
import Question from "./Question";
import { useState } from "react";


const useStyles = makeStyles(() => ({
    root: {
        margin: '40px 0px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: 'auto'
    },
    accordion: {
        margin: '0px 20px'
    }
}),
{index:1})

export default function QuestionsContainer(props){
    const classes = useStyles();
    const [question, setQuestion] = useState();


    return(
            <div className={classes.root}>
                <TitleHeading>
                    Order Online FAQs
                </TitleHeading>

                <Question 
                    question="How does the Free US Shipping? "
                    answer="You can see the latest tracking status update in your Rénova Belle account, and we will automatically email you the tracking number. This way you can track and keep an eye on your delivery."
                />

                <Question 
                    question="How do I track my order? "
                    answer="You can see the latest tracking status update in your Rénova Belle account, and we will automatically email you the tracking number. This way you can track and keep an eye on your delivery."
                />

                <Question 
                    question="What’s your Return Policy?  "
                    answer="You can see the latest tracking status update in your Rénova Belle account, and we will automatically email you the tracking number. This way you can track and keep an eye on your delivery."
                />
                
                <Question 
                    question="Do you offer International Shipping? "
                    answer="You can see the latest tracking status update in your Rénova Belle account, and we will automatically email you the tracking number. This way you can track and keep an eye on your delivery."
                />

            </div>              
    )
}