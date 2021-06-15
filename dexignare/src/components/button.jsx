import React from 'react';
import logo from "../assets/google_logo.PNG"

function Button({Icon,Title,BackgroundColor,link}){
    var bgcolor=["btn-white","btn-purple","btn-black","btn-red"];
    var name="btn";
    var landingname="LN"

    if(bgcolor.includes(BackgroundColor)){
        name=name+" "+BackgroundColor;
    }

    return (
        <>
            <a href={link} className={name}>
                {Icon &&  <img src={logo} alt="Google Logo" width="20" height="20" className="btn__icon" target="_blank" rel="noopener noreferrer"/> }
                {Title}
            </a>
        </>
    );
}

export default Button;