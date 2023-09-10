import './css/TodoSearch.css'

function searchTodo(event){
    searchField = event.target.value
    console.log(searchField)
}
let searchField="Test"
function TodoSearch(){
    return (
        <input placeholder="Cortar Cebolla"
        value={searchField}
        onChange={(event)=>searchTodo(event)}
        >
            
        </input>
    )
}

export {TodoSearch};
