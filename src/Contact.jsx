import React, { useState } from "react";
const Contact=()=>{
    const [formData,setFormData]=useState({
        name:"",
        number:"",
        email:"",
        message:""
    })
    const changeEvent=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>{
            return {
             ...prevData,
             [name]:value
            }
      })
    }
    const submitForm=(e)=>{
        e.preventDefault();
       alert(formData.name+formData.number+formData.email+formData.message);
       setFormData((prevData)=>{
        return prevData;
       })
    }
    return (
        <div className="form-container">
            <h1>Contact Us</h1>
            <form action="post" onSubmit={submitForm}>
                <div className="form_elem">
                 <label htmlFor="FullName">Full Name</label>
                 <input type="text" name="name" placeholder="Enter your name" id="" onChange={changeEvent}/>
                </div>
                <div className="form_elem">
                 <label htmlFor="number">Mobile Number</label>
                 <input type="text" name="number" placeholder="Enter your Number" id="" onChange={changeEvent}/>
                </div>
                <div className="form_elem">
                 <label htmlFor="email">Email</label>
                 <input type="email" name="email" placeholder="Enter your Email" id="" onChange={changeEvent}/>
                </div>
                <div className="form_elem">
                 <label htmlFor="message">Message</label>
                 <textarea name="message" placeholder="Enter your message" id="" cols="30" rows="10" onChange={changeEvent}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Contact;