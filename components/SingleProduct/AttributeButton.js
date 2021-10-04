
import { Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    button: {
        border: "1px solid #333 !important",
        fontSize: 14,
        fontWeight: 700,
        width:202,
        height: 45,
        borderRadius: "5px !important",
        textTransform: 'capitalize',
            [theme.breakpoints.down('sm')]: {
                width: '130px',
                fontSize: 13,
                height: 40
            }
           
    }
}),
{index:1})

export default function AttributeButton({children, ...props}){

    const classes = useStyles();
    
    return (
        <Button 
            className={classes.button}
            variant={props.active ? "contained": "outlined"}
            color="secondary"
            {...props}
        >
        
        {children}

        </Button>
        
    )

}