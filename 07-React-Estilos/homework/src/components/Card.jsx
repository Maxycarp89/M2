import React from 'react';
import estilos from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (<div className ={estilos.container}>
  <div>
    <button onClick={ props.onClose } className ={estilos.btn}>X</button>
  </div>
  <div className= {estilos.contenido}>
  <div >
    <h4> {props.name} </h4>
  </div>
  <div>
    <h6> Min</h6>
    <h6> {props.min} </h6>
  </div>
  <div>
    <h6> Max</h6>
    <h6> {props.max} </h6>
  </div>
  <div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt="logo" />
  </div>
  </div>
      </div>)
   
};