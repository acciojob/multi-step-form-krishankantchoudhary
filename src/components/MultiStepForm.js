
import React from "react";
import { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const MultiStepForm = () => {
  const[step,setStep]=useState(1)

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

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
    
      console.log("Form submitted");
    
  }
  return (
    
      <Step step={step}
      data={formData}
      onChange={handleChange}
      handlenext={handlenext}
      handleprevious={handleprevious}
      handlesubmit={handlesubmit}
      >
      </Step>
    
  )
}

export default MultiStepForm
