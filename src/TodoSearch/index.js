import React from 'react';
import '../css/TodoSearch.css'
import { TodoContext } from '../TodoContext';


function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    return (
        <input placeholder="Cortar Cebolla"
        value={searchValue}
        onChange={(event)=>setSearchValue(event.target.value)}
        >
            
        </input>
    )
}

export {TodoSearch};
