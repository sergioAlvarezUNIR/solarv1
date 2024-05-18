import React from "react";
import { InCont } from "./InCont";
import { OutCont } from "./OutCont";
import "../../styles/Calculadora.css";

export const Calculadora = (props) => {

  return (
    <div id="calculadora" className="calculadora">
        <InCont/>
        <OutCont/>     
    </div>
  );
};