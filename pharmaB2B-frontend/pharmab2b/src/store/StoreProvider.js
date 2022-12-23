import React, { createContext, useReducer } from 'react';
import storeReducer from './storeReducer';

export const Store = createContext();
const initialState = {
  cart: {
    items: {},
  },
};
const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
export default StoreProvider;
