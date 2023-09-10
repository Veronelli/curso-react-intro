import './css/TodoSearch.css'
import React, { useState } from 'react'


function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState();
    useState('');

    console.log("Texto escrito: ", searchValue)
    return (
        <input placeholder="Cortar Cebolla"
        value={searchValue}
        onChange={(event)=>setSearchValue(event.target.value)}
        >
            
        </input>
    )
}

export {TodoSearch};
