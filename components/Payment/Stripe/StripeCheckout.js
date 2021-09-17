import axios from 'axios';
import StripePay from 'react-stripe-checkout';
import config from "../../../utils/config";

export default function StripeCheckout(props){

    const makePayment = async (token)=>{
        try{
            const response = await axios.post(config.ajaxBase + "cart/charge", {
                token
            },{
                withCredentials: true
            })
        }
        catch(e){
            console.log("stripe payment error");
        }
        


    }

    return (
        <StripePay
        stripeKey="pk_test_51Ja3fHIBcCJt31ujqmhAFSmmkMB2dvpF2XiaRXlaVvIvp87gh1A0yrCcuoajlS5sp9ZSbdrJSJpVQB6VMufpQelf00BAobH2V7"
        token={makePayment}
        name="Credit Card"
        amount={1*100}
        >
            {props.children}

        </StripePay>
    )

}