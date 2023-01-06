const storeReducer = (state, action) => {
  const cartItems = state.cart.items;
  switch (action.type) {
    case 'USER_LOG_IN':
      localStorage.setItem('userDetails', JSON.stringify(action.payload));
      return {
        ...state,
        userDetails: { ...action.payload },
      };
    case 'USER_LOG_OUT':
      localStorage.setItem('userDetails', null);
      return {
        ...state,
        userDetails: null,
      };
    case 'ADD_ITEM_TO_CART':
      cartItems[action.payload.key] = {
        product: action.payload.product,
        quantity: action.payload.quantity,
      };
      return {
        ...state,
        cart: {
          ...state.cart,
          items: { ...cartItems },
        },
      };
    case 'REMOVE_ITEM_FROM_CART':
      const updatedCartItems = Object.fromEntries(
        Object.entries(cartItems).filter(([key]) => key !== action.payload.key)
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          items: { ...updatedCartItems },
        },
      };
    case 'EMPTY_CART_ITEMS':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: {},
        },
      };
    default:
      return state;
  }
};

export default storeReducer;
