import axios from 'axios';
import StripePay from 'react-stripe-checkout';
import config from "../../../utils/config";
import { useAuth } from '../../context/AuthProvider';

export default function StripeCheckout(props){

    const [auth, dispatch] = useAuth();

    const makePayment = async (token)=>{
        dispatch({
            type: "setPaymentToken",
            payload: token
        })
        


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