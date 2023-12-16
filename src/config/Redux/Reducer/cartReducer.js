const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARTS":
      return {
        ...state,
        cart: action.payload,
      };

    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "UPDATE_CART":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
