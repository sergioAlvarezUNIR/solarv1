import React from "react";
import "../../styles/OutCont.css";





export const OutCont = (props) => {

  
 

    return (
      <div className="cont">
        <div className="cont_card">
        <p>El valor aproximado del proyecto de sistema solar es de EUR$X,XXX</p> 
        <p>{props.inLat}</p>
       
       
        </div>
        <div className="cont_card">
        <p>El ahorro aproximado en su factura de energía es de  EUR$X,XXX</p> 
        </div>
        <div className="cont_card">
        <p>La rentabilidad del proyecto es de EUR$X,XXX</p> 
        </div>
      </div>
    );
  };