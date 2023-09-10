import React from "react";
function useLocalStorage(itemName, initialValue){
    const localStorageItems = localStorage.getItem(itemName);
    let parsedItems = []
    if(!localStorageItems){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }
    else{
      parsedItems = JSON.parse(localStorageItems)
    }
    const [items, setItems] = React.useState(parsedItems)
  
    const saveItems = (newItems)=>{
      localStorage.setItem(itemName, JSON.stringify(newItems))
      setItems(newItems)
    }
    return [items, saveItems];
  }

export {useLocalStorage};
