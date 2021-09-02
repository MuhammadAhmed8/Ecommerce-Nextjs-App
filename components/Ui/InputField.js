import { TextField } from '@material-ui/core';

export default function InputField({children, ...props}){
    
    return (
        <TextField
            variant = "outlined"
            {...props}
            
        >
            {children}
        </TextField>
    )
}