import React from "react";
import { DragMap } from "./DragMap";
import { InForm } from "./InForm";
import "../../styles/InCont.css"

export const InCont = (props) => {



    return (
      <div className="incont">
          <h1>Calculadora Sistema Solar</h1>  
          <DragMap/> 
          <InForm inLat={props.inLat} setInLat={props.setInLat}/>
      </div>
    );
  };