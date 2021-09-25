import { Accordion, AccordionDetails, AccordionSummary, makeStyles } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";


const useStyles = makeStyles(() => ({
    accordion: {
        margin: '0px 20px'
    },
    text: {
        fontSize: '1.2rem'
    }
}),
{index:1})

export default function Question(props){
    const classes = useStyles();

    return(
            <Accordion className={classes.accordion} >
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <p className={classes.text}>
                    {props.question}
                </p>
                </AccordionSummary>
                
                <AccordionDetails >
                <p>
                    {props.answer}
                </p>
                </AccordionDetails>
            </Accordion>
        
    )
}