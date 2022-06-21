import React from 'react';
import Card from './Card';
import estilos from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={estilos.container} >
      {
      props.cities.map((ciudad) => {
  return (
    <Card
    max={ciudad.main.temp_max}
    min={ciudad.main.temp_min}
    name={ciudad.name}
    img={ciudad.weather[0].icon}
    onClose={props.onClose}
  />
  )
      
  
      })
      }
  
  
  
  
  
    </div>)
  
};