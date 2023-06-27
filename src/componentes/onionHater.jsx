import "./onionHater.css"
import React, { useState } from "react";
const OnionHater = () => {

    const [identificador, setIdentificador] = useState(0);
 
    const handleOnion = (event) => {
        var input2 = event.target.value
        input2.includes("cebolla") ? alert("Odio la cebolla!") : 0
        input2.includes("cebolla") ? (setIdentificador( (identificador) => identificador = "cebolla")):(setIdentificador( (identificador) => identificador = 0))
       
    }

    return (
        <div className="textInput">
            <h1>Escribe algo</h1>
            <input 
            type="text" 
            name="textInput" 
            onChange={handleOnion} 
            className={identificador === "cebolla" ? "redTextInput":"normalInput"}
            />
        </div>
    )
}

export default OnionHater