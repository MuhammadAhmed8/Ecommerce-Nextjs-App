
import { Button } from "@material-ui/core"


export default function AttributeButton({children, ...props}){
    
    return (
        <Button 
        style={{
            border: "1px solid #333 !important",
            fontSize: 14,
            fontWeight: 700,
            width:202,
            height: 45,
            borderRadius: "5px !important"
            
        }} 
        variant={props.active ? "contained": "outlined"}
        color="secondary"
        {...props}
        >
        
        {children}

        </Button>
        
    )

}