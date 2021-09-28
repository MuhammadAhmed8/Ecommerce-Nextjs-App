import { withStyles, Button } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
    root: {
      color: '#fff',
      textTransform: 'Capitalize',
      backgroundColor: '#ca0303',
      '&:hover': {
        backgroundColor: '#ccc',
        color: '#222',
      },
      fontSize: '0.9rem',
      fontWeight: '400',
      fontFamily: 'Helvetica',
    },
  }))(Button);

  export default function RedButton({children, ...props}){

    return(
                <ColorButton
                    variant="contained"
                    color='primary'
                    value={children}
                    {...props}
                >
                    {children}
                </ColorButton>
    )
}