function TodoItem({title, completed}){
    return(
      <div className='todo-list'>
        <li>
          <span>
            V
          </span>
          <h4>{title}</h4>
          <p><i>{completed ? "Completed" : ""}</i></p>
          <span>
            X
          </span>
        </li>
      </div>
    )
    }

export { TodoItem };
