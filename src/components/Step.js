import React from "react";

const Step = ({
  step,
  data,
  onChange,
  handlenext,
  handleprevious,
  handlesubmit
}) => {
  return (
    <>
      {step === 1 && (
        <form id="step1" onSubmit={(e) => e.preventDefault()}>
          <h2>Customer Details</h2>

          <input
            id="first_name"
            value={data.first_name}
            onChange={onChange}
          />

          <input
            id="last_name"
            value={data.last_name}
            onChange={onChange}
          />

          <button type="button" onClick={handlenext}>Next</button>
        </form>
      )}

      {step === 2 && (
        <form id="step2" onSubmit={(e) => e.preventDefault()}>
          <h2>Car Details</h2>

          <input id="model" value={data.model} onChange={onChange} />
          <input id="car_price" value={data.car_price} onChange={onChange} />

          <button type="button" onClick={handleprevious}>Previous</button>
          <button type="button" onClick={handlenext}>Next</button>
        </form>
      )}

      {step === 3 && (
        <form id="step3" onSubmit={(e) => e.preventDefault()}>
          <h2>Payment Details</h2>

          <input id="card_info" value={data.card_info} onChange={onChange} />
          <input id="expiry_date" value={data.expiry_date} onChange={onChange} />

          <button type="button" onClick={handleprevious}>Previous</button>
          <button type="button" onClick={handlesubmit}>Submit</button>
        </form>
      )}
    </>
  );
};

export default Step;
