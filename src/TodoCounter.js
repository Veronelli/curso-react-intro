import './css/TodoCounter.css'

const estilos = {
    fontSize: 24, // this mean 24px
    textAkign: "center",
    margin: 0,
    padding: 48,
} 

function TodoCounter({completed, total}){
    return (
      <h1 >
        Has completado {completed} de {total} TODO
      </h1>
    );
  }

export default TodoCounter;