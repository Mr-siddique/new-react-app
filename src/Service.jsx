import React from "react";
import Data from "./Data";
import Card from "./Card";
const Service=()=>{
    return(
            <>
             <h1 className="service-heading">Our Services</h1>
        <div className="main-container">
         {Data.map((val,index)=> <Card title={val.title} src={val.src}/>)}
        </div>
        </>
    )
}
export default Service;