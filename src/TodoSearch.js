import './css/TodoSearch.css'


function TodoSearch({searchValue, setSearchValue}){

    return (
        <input placeholder="Cortar Cebolla"
        value={searchValue}
        onChange={(event)=>setSearchValue(event.target.value)}
        >
            
        </input>
    )
}

export {TodoSearch};
