import React from 'react'

const Step = ({step, data, onChange,handlenext,handleprevious,handlesubmit}) => {
  return (
    <>
        {step===1 &&
        <form id="step1">
            <h2>Customer Details</h2>
            <label htmlFor="first_name">First Name:</label>
            <input
            id="first_name"
            type="text"
            value={data.first_name}
            onChange={onChange}
            /><br></br>
            <label htmlFor="last_name">Last Name:</label>
            <input
            type="text"
            id="last_name"
             value={data.last_name}
            onChange={onChange}
            /><br></br>
            <button type="button" onClick={handlenext}>Next</button>
        </form>
        }
        {
            step===2 &&
            <form id="step2">
                <h2>Car Details</h2>
                <label htmlFor="model">Model:</label>
                <input
                id="model"
                value={data.model}
            onChange={onChange}
                /><br></br>
                <label htmlFor="car_price">Price:</label>
                <input
                id="car_price"
                value={data.car_price}
            onChange={onChange}
                /><br></br>
                <button type="button" onClick={handleprevious}>Previous</button>
                <button type="button" onClick={handlenext}>Next</button>
            </form>
        }
        {
            step===3 &&
            <form id="step3">
                <h2>Payment Details</h2>
                <label htmlFor="card_info">Credit Card Number:</label>
                <input
                id="card_info"
                value={data.card_info}
            onChange={onChange}
                /><br></br>
                <label htmlFor="expiry_date">Expiration Date:</label>
                <input
                id="expiry_date"
                type="month"
            value={data.expiry_date}
            onChange={onChange}
                /><br></br>
                <button type="button" onClick={handleprevious}>Previous</button>
                <button type="button" onClick={handlesubmit}>Submit</button>
            </form>
        }
    </>
  )
}

export default Step;
