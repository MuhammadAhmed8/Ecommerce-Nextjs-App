import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
}),
{index:1})

export default function Video({children, ...props}){
    const classes = useStyles(); 

    return (
         <video width='100%' autoPlay muted loop>
             <source src={props.src} {...props} />
         </video>
        
    )
}