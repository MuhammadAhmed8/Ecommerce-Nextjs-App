import { Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';


const steps = ['Cart', 'Shipping', 'Payment'];


function CartStepper({step = 0}){

    return (

      //   <Stepper alternativeLabel activeStep={activeStep} size="lg">
      //   {steps.map((label) => (
      //     <Step key={label} >
      //       <StepLabel>{label}</StepLabel>
      //     </Step>
      //   ))}
      // </Stepper>
      <div className="progressBar">

            <ul>

                <li className={step===1 ? "active": ""}>
                    <span className="count">1</span>
                    <span className="text">CART</span>
                </li>

                <li className={step===2 ? "active" :""}>
                    <span className="count">2</span>
                    <span className="text">SHIPPING</span>
                </li>
                <li className={step===3 ? "active": ""}>
                    <span className="count">3</span>
                    <span className="text">PAYMENT</span>
                </li>

            </ul>

        </div>


    )



}

export default CartStepper;