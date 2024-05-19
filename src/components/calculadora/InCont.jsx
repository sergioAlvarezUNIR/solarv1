import React from "react";
import { DragMap } from "./DragMap";
import { InForm } from "./InForm";

export const InCont = (props) => {



    return (
      <div>
          <p>InCont</p>  
          <DragMap/> 
          <InForm inLat={props.inLat} setInLat={props.setInLat}/>
      </div>
    );
  };