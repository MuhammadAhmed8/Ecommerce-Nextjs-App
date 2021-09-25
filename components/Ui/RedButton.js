import { withStyles, Button } from "@material-ui/core";
import { red } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[900]),
      textTransform: 'Capitalize',
      backgroundColor: red[900],
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