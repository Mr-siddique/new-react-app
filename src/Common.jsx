import React from "react";
const Common=(props)=>{
    return (
        <div className="header">
            <div className="content">
                <h1>{props.title} <strong className="mark">Mr_Siddique</strong></h1>
                <p>We are the team of talented developers able to create any kind of website.</p>
                    <a href={props.href} className="get_started">
                    {props.btnName}
                    </a>
            </div>
                <img src={props.src} alt="random" className="home_img"/>
        </div>
    )
}
export default Common;