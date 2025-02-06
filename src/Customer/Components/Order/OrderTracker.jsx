import React from 'react'
import { Step, StepLabel, Stepper } from '@mui/material';
const steps=[
    "Placed",
    "Order confirmed",
    "Shipped",
    "Out of Delivery",
    "Delivered"
]


function OrderTracker({activeStep}) {
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
       {steps.map((label)=><Step>
        <StepLabel  sx={{color:"#9155FD", fontSize:"44px"}} >{label}</StepLabel>
       </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker
