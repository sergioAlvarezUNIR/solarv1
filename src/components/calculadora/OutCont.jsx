import React from "react";
import "../../styles/OutCont.css";



export const OutCont = (props) => {

   
   


    return (
      <div className="outcont">
        <h2>!Felicitaciones! Esta es la información de tu proyecto:</h2>
        <div className="cont">          
          <div className="cont_card">
          <p>El valor aproximado del proyecto de sistema solar es de</p>
          <h3>EUR$ {Number(props.valSistOg).toFixed(2)}</h3>       
          </div>
          <div className="cont_card">
          <p>El ahorro aproximado en su factura de energía es de  EUR$X,XXX</p> 
          </div>
          <div className="cont_card">
          <p>La rentabilidad del proyecto es de EUR$X,XXX</p> 
          </div>
        </div>
      </div>
    );
  };