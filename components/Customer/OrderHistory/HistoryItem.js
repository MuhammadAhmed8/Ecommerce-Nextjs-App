
export default function HistoryItem(props){

    const {number, grand_total, tracking_number, date_placed} = props.data

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
                <p><b>Order#:</b> {number}</p>
                <p><b>Order Placed:</b> {date_placed}</p>
                <p><b>Total: </b> {`${grand_total}`}</p>
                <p><b>Tracking#: </b> {tracking_number}</p>
            </div>
            <hr></hr>
            {props.children}
            
        </div>
    )
}