import React from "react";
import Common from "./Common"
import web from "../src/images/business.jpg";

const About=(props)=>{
   return <Common title="Welcome to about Page" src={web} btnName="Contact Now" href="/contact"/>
}
export default About;