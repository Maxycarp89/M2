import React from 'react';
import estilos from './Search.module.css'
export default function SearchBar(props) {
  // acá va tu código
  return (<div className={estilos.contenedor} >
   
    <input type='text' placeholder='ciudad...'/>
    <button onClick={() =>props.onSearch('cualquier ciudad') } className={estilos.btn} >Agregar</button>
  
</div>)
};