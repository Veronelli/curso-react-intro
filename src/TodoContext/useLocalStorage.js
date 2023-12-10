import React from "react";

const initialState = ({ item }) => ({
  sincronizedItem: false,
  item,
  loading: true,
  error: false,
});

const actionTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  SAVE_ITEM: "SAVE_ITEM",
  SINCRONIZE_ITEM: "SINCRONIZE_ITEM",
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.SUCCESS]: {
    ...state,
    sincronizedItem: true,
    item: payload,
    loading: false,
  },
  [actionTypes.SAVE_ITEM]: {
    ...state,
    item: payload,
  },
  [actionTypes.SINCRONIZE_ITEM]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ item: initialValue })
  );
  const { sincronizedItem, item, loading, error } = state;
  // const [sincronizedItem, setSincronizedItem] = React.useState(false);
  // const [item, setItem] = React.useState(initialValue);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);

  const onError = () => {
    dispatch({ type: actionTypes.ERROR });
  };
  const onSuccess = (item) => {
    dispatch({ type: actionTypes.SUCCESS, payload:  item  });
  };
  const onSaveItem = (item) => {
    dispatch({ type: actionTypes.SAVE_ITEM, payload: item });
  };
  const onSincronizeItem = () => {
    dispatch({ type: actionTypes.SINCRONIZE_ITEM });
  };

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError();
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSaveItem(newItem);
  };

  const sincronizeItem = () => {
    onSincronizeItem();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };
