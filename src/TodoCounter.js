const estilos = {
    backgroundColor: 'red'
} 

function TodoCounter({completed, total}){
    return (
      <h1 style={estilos}>
        Has completado {completed} de {total} TODO
      </h1>
    );
  }

export default TodoCounter;