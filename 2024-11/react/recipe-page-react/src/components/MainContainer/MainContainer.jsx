import './MainContainer.css';
import React from "react";
import Head from "../Head/Head.jsx";
import Recipe from "../Recipe/Recipe.jsx";


export default function MainContainer() {
    return (
        <div className="main-container">
            Hello from the main container!

            <Head/>
            <Recipe/>
        </div>
    );
}

