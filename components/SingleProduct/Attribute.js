

export default function Attribute({children, ...props}){

    if(!props.active) return null;

    return (

        <div style={{maxWidth:850, margin:'auto'}}>
            {children}
        </div>
        
    )

}