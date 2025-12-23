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
      {/* STEP 1 */}
      {step === 1 && (
        <form id="step1">
          <h2>Customer Details</h2>

          <label htmlFor="first_name">First Name:</label>
          <input
            id="first_name"
            type="text"
            value={data.first_name}
            onChange={onChange}
          />

          <br />

          <label htmlFor="last_name">Last Name:</label>
          <input
            id="last_name"
            type="text"
            value={data.last_name}
            onChange={onChange}
          />

          <br />

          <button type="button" onClick={handlenext}>
            Next
          </button>
        </form>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <form id="step2">
          <h2>Car Details</h2>

          <label htmlFor="model">Model:</label>
          <input
            id="model"
            type="text"
            value={data.model}
            onChange={onChange}
          />

          <br />

          <label htmlFor="car_price">Price:</label>
          <input
            id="car_price"
            type="text"
            value={data.car_price}
            onChange={onChange}
          />

          <br />

          <button type="button" onClick={handleprevious}>
            Previous
          </button>

          <button type="button" onClick={handlenext}>
            Next
          </button>
        </form>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <form id="step3">
          <h2>Payment Details</h2>

          <label htmlFor="card_info">Credit Card Number:</label>
          <input
            id="card_info"
            type="text"
            value={data.card_info}
            onChange={onChange}
          />

          <br />

          <label htmlFor="expiry_date">Expiration Date:</label>
          <input
            id="expiry_date"
            type="month"
            value={data.expiry_date}
            onChange={onChange}
          />

          <br />

          <button type="button" onClick={handleprevious}>
            Previous
          </button>

          <button type="button" onClick={handlesubmit}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Step;
