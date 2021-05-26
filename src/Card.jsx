import React from "react";
import img from "../src/images/business.jpg";
const Card=(props)=>{
    return (
        <div className="card-container">
            <img src={props.src} alt="" />
            <h3>{props.title}</h3>
        </div>
    )
}
export default Card;