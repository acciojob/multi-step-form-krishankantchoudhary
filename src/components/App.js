import React, { useState } from "react";
import "./../styles/App.css";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);

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

  const handlenext = () => {
    setStep(prev => (prev < 3 ? prev + 1 : prev));
  };

  const handleprevious = () => {
    setStep(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handlesubmit = () => {
    console.log("Form submitted");
  };

  return (
    <Step
      step={step}
      data={formData}
      onChange={handleChange}
      handlenext={handlenext}
      handleprevious={handleprevious}
      handlesubmit={handlesubmit}
    />
  );
};

export default App;
