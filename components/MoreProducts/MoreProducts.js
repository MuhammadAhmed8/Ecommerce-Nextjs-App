/* eslint-disable react/display-name */

import { Typography } from "@material-ui/core";
import AddToCart from '../Cart/AddToCart';

export default function MoreProducts(props){

    return (
        <div>
            {props.children}
        </div>

    )

}

MoreProducts.Title = function({children, ...props}){
    return (
        <Typography variant="h3" 
                    style={{textAlign:'center', 
                    margin:"30px", 
                    fontWeight: '300', 
                    fontFamily: 'Times'}}

            {...props}>
            {children}
       </Typography>
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
        textAlign: 'left'
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

            <br></br>
           <AddToCart style={{ backgroundColor: '#ca0303', color: '#fff' }} />

        </div>
        
        
    </div>)
}



