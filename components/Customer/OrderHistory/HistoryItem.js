
export default function HistoryItem(props){


    return (
        <div>
            <div style={
            {
            display:'flex', 
            justifyContent:"space-around",
            alignItems:'center',
            flexWrap:'wrap',
            padding:10
            }}>
                <p><b>Order#:</b> 12345474</p>
                <p><b>Order Placed:</b> 12345474</p>
                <p><b>Total: </b> $12345474</p>
                <p><b>Tracking#: </b> 12345474</p>
            </div>
            <hr></hr>
            {props.children}
            
        </div>
    )
}