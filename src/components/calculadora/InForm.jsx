import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/InForm.css";


                 

export const InForm = (props) => {





    const { register, formState:{ errors }, handleSubmit } = useForm ({
      defaultValues: {
        lat: '175',
        lon: '-70',
 
        area: '20',
        ori: 'norte',
        inc: '10°',
        inmueble: 'residencial',
        tarifa: '10',
        excedente: '3',
        consumo: '100'
      }
    })

    const onSubmit = (data) => {

     

      console.log(data);
      props.setInLat(data.lat);

      props.setIsShown("OutCont");

      window.location.href = '/#calculadora';

      
    }

   


    return (

     
      <div className="inform">
          <h2>Formulario</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Ubicación (Latitud)</label>
              <input type="text" {...register('lat', {
                required: true,
                maxLength: 10
              })}/>
              {errors.lat?.type === 'required' && <p>El campo es requerido</p>}
              {errors.lat?.type === 'maxLength' && <p>El campo debe tener menos de 10 caracteres</p>}
            </div>
            <div>
              <label>Ubicación (Longitud)</label>
              <input type="text" {...register('lon')}/>
            </div>

            <div>
              <label>Radiación promedio {window.radVar}</label>
              <input type="text" {...register('rad', {
                required: true,
                maxLength: 10
              })} defaultValue="3"/>
              {errors.rad?.type === 'required' && <p>El campo es requerido</p>}
              {errors.rad?.type === 'maxLength' && <p>El campo debe tener menos de 10 caracteres</p>}
            </div>

            <div>
              <label>Área disponible para paneles</label>
              <input type="text" {...register('area')}/>
            </div>
            <div>
              <label>Orientación aproximada tejado</label>
              <input type="text" {...register('ori')}/>
            </div>
            <div>
              <label>Inclinación aproximada tejado</label>
              <input type="text" {...register('inc')}/>
            </div>
            <div>
              <label>Tipo de inmueble</label>
              <select {...register('inmueble')}>
                <option value="residencial">Residencial</option>
                <option value="empresarial">Empresarial</option>
              </select>
            </div>
            <div>
              <label>Tarifa energía</label>
              <input type="text" {...register('tarifa')}/>
            </div>
            <div>
              <label>Precio excedente</label>
              <input type="text" {...register('excedente')}/>
            </div>
            <div>
              <label>Consumo promedio mes</label>
              <input type="text" {...register('consumo')}/>
            </div>
            <input type="submit" value="Enviar"></input>
          </form>
      </div>
    
    );
  };
