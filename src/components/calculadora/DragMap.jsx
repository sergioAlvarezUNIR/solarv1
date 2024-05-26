import React from "react";

import '../../styles/DragMap.css';

export const DragMap = (props) => {



  const forceUpdate = () => {
    props.setUpdateRad(window.radVar);

    props.setIsShown("InForm");

    window.location.href = '/#calculadora';

    

 


                        const fetchData = async () => {
                          try {

                            let pvgisAPI=`https://re.jrc.ec.europa.eu/api/v5_2/MRcalc?lat=${window.latVar}&lon=${window.lonVar}&horirrad=1&outputformat=json`
                            
                        
                            const response = await fetch(pvgisAPI,{method: "GET"});
                            

                            const jsonData = await response.json();
                            //setData(jsonData);
                            
                            console.log("Esta es la info de jsonData dentro de DragMAp")
                            console.log(jsonData);


                                                                // Obtén los valores de H(h)_m de cada mes
                                              const valoresHhm = jsonData.outputs.monthly.map(mes => mes["H(h)_m"]);
                                              
                                              // Calcula la suma de todos los valores
                                              const sumaValores = valoresHhm.reduce((acumulador, siguienteValor) => acumulador + siguienteValor, 0);
                                              
                                              // Calcula el promedio
                                              const promedioHhm = sumaValores / jsonData.outputs.monthly.length;
                                              
                                              console.log(`El promedio de H(h)_m es: ${promedioHhm} kWh/m2/mo`);

                                              window.radVar=promedioHhm;
                                              console.log("Esto es dentro de DragMap El promedio rad dentro de fetch es " + window.radVar);



                                            
                            
                          } catch (error) {
                            console.error('Error fetching data:', error);
                          }
                        };

                        fetchData();

  };

    return (
      <div className="dragmap">
          <h2>Selecione la ubicación en el mapa</h2>
          <div id="map" style={{height: "40vh", width: "50vw"}}></div>
          <p>Latitud: {window.latVar}    Longitud: {window.lonVar}    Radiación:{props.updateRad}</p>
          <button className="dragmap" onClick={forceUpdate}>Continuar</button>
      </div>
    );
  };