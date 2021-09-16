/* eslint-disable react/display-name */

export default function MoreProducts(props){

    return (
        <div>
            {props.children}
        </div>

    )

}

MoreProducts.Title = function({children, ...props}){
    return (
        <h2 style={{textAlign:'center', 
                    margin:"30px", 
                    fontSize:"2rem", 
                    fontWeight: '300', 
                    fontFamily: 'Times'}} 
            {...props}>
            {children}
        </h2>
    )
}

MoreProducts.Body = function({children, ...props}){
    return (
        <div 
        style={{
            display:"flex",
            gap:10,
            flexWrap:'wrap'
        }}
        {...props}
        >
            {children}
        </div>
    )
}

MoreProducts.Item = function({children, ...props}){
    return (
    <div
    style={{
        display:'flex',
        flexDirection:'column', 
    }}
    >
        <div>
            <img src="https://www.renovabele.com/img/fav_2.png" style={{width:"100%", objectFit:'cover'}}/>
        </div>

        <div style={{padding: "15px 0"}}>

           <h3>Epidermal Growth Factor Serum</h3>

           <div>
               <p>
               Cell Renewal Award-Winning Anti-Aging Treatment for Timeless Skin.
               </p>
           </div>

        </div>
        
        
    </div>)
}



