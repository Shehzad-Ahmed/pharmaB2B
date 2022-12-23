const storeReducer = (state, action) => {
  const cartItems = state.cart.items;
  switch (action.type) {
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
    default:
      return state;
  }
};

export default storeReducer;
