import React from 'react'

const Step = ({step,handlenext,handleprevious,handlesubmit}) => {
  return (
    <>
        {step===1 &&
        <form>
            <h2>Customer Details</h2>
            <label htmlFor="first_name">First Name:</label>
            <input
            id="first_name"
            type="text"
            /><br></br>
            <label htmlFor="last_name">Last Name:</label>
            <input
            type="text"
            id="last_name"
            /><br></br>
            <button onClick={handlenext}>Next</button>
        </form>
        }
        {
            step===2 &&
            <form>
                <h2>Car Details</h2>
                <label htmlFor="model">Model:</label>
                <input
                id="model"
                /><br></br>
                <label htmlFor="car_price">Price:</label>
                <input
                id="car_price"
                /><br></br>
                <button onClick={handleprevious}>Previous</button>
                <button onClick={handlenext}>Next</button>
            </form>
        }
        {
            step===3 &&
            <form>
                <h2>Payment Details</h2>
                <label htmlFor="card_info">Credit Card Number:</label>
                <input
                id="card_info"
                /><br></br>
                <label htmlFor="expiry_date">Expiration Date:</label>
                <input
                id="expiry_date"
                type="month"
                /><br></br>
                <button onClick={handleprevious}>Previous</button>
                <button onClick={handlesubmit}>Submit</button>
            </form>
        }
    </>
  )
}

export default Step;
