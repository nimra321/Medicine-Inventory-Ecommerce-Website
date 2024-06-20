import React, { useState } from "react";

const CheckOut = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [state2, setState2] = useState('');
  const [number, setNumber] = useState('');
  const [info, setInfo] = useState('');

  async function payment(e) {
    e.preventDefault();

    const requestData = {
      firstname,
      lastname,
      address,
      state,
      state2,
      number,
      info,
    };

    try {
      await fetch('http://localhost:3000/ordered', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });

    } catch (error) {
      console.error("Error handling response:", error);
    }
  }


  return (
    <div className="section-container mt-28 px-4 lg:px24">
        <div>
            <h2 className="text-5xl font-bold text-center">Billing & Shipping details</h2>
        </div>
        <br />
        <hr />
        <br />
        <div>
        <form>
            <div className="form-control w-full ">
            {/* 1st  */}
            <div className="flex items-center gap-4">
              <div className="form-control w-full ">
              <label className="form-control w-full ">
              <label className="label">
                {/* <span className="label-text">Medicine Name</span> */}
              </label>
                <input type="text"  placeholder="First Name*" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="input input-bordered w-full " />
            </label>
            </div>
            <div className="form-control w-full">
              <label className="form-control w-full ">
              <label className="label">
                {/* <span className="label-text">Medicine Price</span> */}
              </label>
                <input type="text"  placeholder="Last Name*" value={lastname} onChange={(e) => setLastname(e.target.value)} className="input input-bordered w-full" />
            </label>  
            </div>
            </div>
            {/* 2nd  */}
            <div className="form-control w-full ">
              <label className="form-control w-full ">
              <label className="label">
                <span className="label-text">Pakistan</span>
              </label>
                <input type="text" placeholder="Street address*" value={address} onChange={(e) => setAddress(e.target.value)} className="input input-bordered w-full " />
            </label>
            </div> <br />
            {/* 3rd  */}
            <div className="form-control w-full ">
              <select className="select select-bordered" value={state} onChange={(e) => setState(e.target.value)}>
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Islamabad</option>
                <option>Rawalpindi</option>
                <option>Gujranwala</option>
                <option>Multan</option>
                <option>Peshawar</option>
                <option>Quetta</option>
                <option>Sialkot</option>
                <option>Hyderabad</option>
                <option>Sargodha</option>
                <option>Shekhupura</option>
                <option>Rahim Yar Khan</option>
              </select>
              
            </div> <br />
            {/* 4th  */}
            <div className="form-control w-full ">
              <select className="select select-bordered" value={state2} onChange={(e) => setState2(e.target.value)}>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>Khyber Pakhtunkhwa (KPK)</option>
                <option>Balochistan</option>
              </select>
            </div> <br />
            {/* 5th  */}
            <div className="form-control w-full ">
              <label className="form-control w-full ">
                <input type="text" placeholder="Contact number*" value={number} onChange={(e) => setNumber(e.target.value)} className="input input-bordered w-full " />
            </label>
            </div> <br />
            {/* 6th  */}
            <div className="form-control w-full ">
              <label className="form-control w-full ">
              <label className="label">
                <span className="label-text">Additional Information</span>
              </label>
              <textarea 
                className="textarea textarea-bordered h-24" 
                placeholder="Notes about your order, e.g.special notes for delivery.*"
                value={info}
                onChange={(e) => setInfo(e.target.value)}>
                </textarea>
            </label>
            </div><br />
          <button className="btn bg-blue-700 w-full text-white px-6 m-5" onClick={payment} >Place Order </button>   
          </div>      
        </form>
        </div>
    </div>
  )
}

export default CheckOut