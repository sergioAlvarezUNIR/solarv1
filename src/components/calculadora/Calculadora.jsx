import React, { useState } from "react";
import { InCont } from "./InCont";
import { OutCont } from "./OutCont";
import "../../styles/Calculadora.css";




export const Calculadora = (props) => {

    const [isShown, setIsShown] = useState("DragMap"); 

       const [inLat, setInLat] = useState("Lat");
       const [updateRad, setUpdateRad] = useState(0);

       const [valSistOg, setValSistOg] = useState("Cargando valSistOg ...");
       const [tamanoSs, setTamanoSs] = useState(456);

  return (
    <div id="calculadora">
      <div className="container">
              <div  className="calculadora">
                <InCont inLat={inLat} setInLat={setInLat} updateRad={updateRad} setUpdateRad={setUpdateRad} isShown={isShown} setIsShown={setIsShown} valSistOg={valSistOg} setValSistOg={setValSistOg} tamanoSs={tamanoSs} setTamanoSs={setTamanoSs} data={props.data} />
                {isShown==="OutCont" &&<OutCont inLat={inLat} isShown={isShown} setIsShown={setIsShown} valSistOg={valSistOg} setValSistOg={setValSistOg}/> }    
              </div>
      </div>
    </div>
   
  );
};