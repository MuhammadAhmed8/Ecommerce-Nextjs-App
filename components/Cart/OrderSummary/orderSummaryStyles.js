import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({

    orderSummary:{
        display:'flex',
        flexDirection:'column',
        gap:20
    },
    
    orderSummaryItem:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottom: '1px solid #333',
        minHeight:50
    }

    
}))

export default useStyles;