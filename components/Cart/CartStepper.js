import { Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';


const steps = ['Cart', 'Shipping', 'Payment'];


function CartStepper({activeStep = 0}){

    return (

        <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>


    )



}

export default CartStepper;