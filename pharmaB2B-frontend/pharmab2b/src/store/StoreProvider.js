import React, { createContext, useReducer } from 'react';
import storeReducer from './storeReducer';

export const Store = createContext();
const storedUserDetails = localStorage.getItem('userDetails');
const initialState = {
  cart: {
    items: JSON.parse(localStorage.getItem('cartItems') || '{}'),
  },
  userDetails: storedUserDetails ? JSON.parse(storedUserDetails) : null,
};
const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
export default StoreProvider;
