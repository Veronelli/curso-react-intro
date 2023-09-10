import './css/TodoCounter.css'
import React from 'react'

const estilos = {
    fontSize: 24, // this mean 24px
    textAkign: "center",
    margin: 0,
    padding: 48,
} 

function TodoCounter({completed, total}){
  if (completed !== total)
  {
    return(
      <h1 >
        Has completado {completed} de {total} TODO
      </h1>
    )
  }
  else
  {
    return (
      <>
        <h1>
          Genial completaste todas las tareas 🎉

        <h3>
          Sigue proponiendote desafios
        </h3>
        </h1>
      </>
    )
  }
}
export default TodoCounter;