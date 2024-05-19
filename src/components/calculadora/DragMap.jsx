import React from "react";
import '../../styles/DragMap.css';

export const DragMap = (props) => {

    return (
      <div className="dragmap">
          <h2>Selecione la ubicación en el mapa</h2>
          <div id="map" style={{height: "50vh", width: "80%"}}></div>
      </div>
    );
  };