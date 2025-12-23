
import React from "react";
import { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const MultiStepForm = () => {
  const[step,setStep]=useState(1)

  const handlenext=()=>{
    if(step<3){
      setStep(step+1)
    }
  }

  const handleprevious=()=>{
    if(step>1){
      setStep(step-1)
    }
  }

  const handlesubmit=()=>{
    if(step===3){
      console.log("Form submitted");
    }
  }
  return (
    
      <Step step={step}
      handlenext={handlenext}
      handleprevious={handleprevious}
      handlesubmit={handlesubmit}
      >
      </Step>
    
  )
}

export default MultiStepForm
