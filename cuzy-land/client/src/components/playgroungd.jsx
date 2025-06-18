const { useState } = require("react");
import React from "react";

const Playgroung = () =>{

    const clickHandler = () =>{
        console.log("Button clicked!");

        // You can add more functionality here
    }


    const testing = ()=>{
        console.log('testing ')
    }
    return (
        <div className="testing">

       <p className="text-2xl font-bold text-center my-10">Playground</p>




        </div>
    )
}

const provoking = ()=>{

    console.log("fucking shot up ")

}


// npx tree -I "node_modules" -L 3
