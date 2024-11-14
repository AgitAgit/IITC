import "./Head.css";
import React from "react";
import Intro from "../Intro/Intro.jsx";
import PrepTime from "../PrepTime/PrepTime.jsx";

export default function Head(){
    return(
        <div className="Head">
            This is the head.

            <Intro/>
        </div>
    )
}