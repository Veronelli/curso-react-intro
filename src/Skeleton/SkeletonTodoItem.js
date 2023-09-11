import { TodoIcon } from "../TodoIcon";

function SkeletonTodoItem(){
    return(
      <div className='todo-list'>
        <li>
          <TodoIcon type="check"
            fillColor="gray"/>
          <div>
          <h4>

          </h4>
          <p><i>Loading</i></p>
            
          </div>
          <button className='delete-button'>
          <div>
            
          <TodoIcon type="delete"
            fillColor='white'
            />
            </div>
          </button>
        </li>
      </div>
    )
    }

export { SkeletonTodoItem };
