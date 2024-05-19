import React, { useState } from "react";
import { InCont } from "./InCont";
import { OutCont } from "./OutCont";
import "../../styles/Calculadora.css";




export const Calculadora = (props) => {

       const [inLat, setInLat] = useState("Lat");

  return (
  
      <div id="calculadora" className="calculadora">
          <InCont inLat={inLat} setInLat={setInLat}/>
          <OutCont inLat={inLat}/>     
      </div>
   
  );
};