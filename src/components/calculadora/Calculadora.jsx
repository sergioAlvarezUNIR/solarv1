import React, { useState } from "react";
import { InCont } from "./InCont";
import { OutCont } from "./OutCont";
import "../../styles/Calculadora.css";




export const Calculadora = (props) => {

    const [isShown, setIsShown] = useState("DragMap"); 

       const [inLat, setInLat] = useState("Lat");
       const [updateRad, setUpdateRad] = useState(0);

  return (
    <div id="calculadora">
      <div className="container">
              <div  className="calculadora">
                <InCont inLat={inLat} setInLat={setInLat} updateRad={updateRad} setUpdateRad={setUpdateRad} isShown={isShown} setIsShown={setIsShown}/>
                {isShown==="OutCont" &&<OutCont inLat={inLat} isShown={isShown} setIsShown={setIsShown}/> }    
              </div>
      </div>
    </div>
   
  );
};