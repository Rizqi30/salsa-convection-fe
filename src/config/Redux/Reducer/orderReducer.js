const initialState = {
  order: [],
  orderBySnapToken: [],
  orderBySnapTokenId: [],
  snapToken: "",
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        order: action.payload,
      };

    case "GET_ORDER_BY_SNAP_TOKEN":
      return {
        ...state,
        orderBySnapToken: action.payload,
      };

    case "GET_ORDER_BY_SNAP_TOKEN_ID":
      return {
        ...state,
        orderBySnapTokenId: action.payload,
      };

    case "ADD_ORDER":
      return {
        ...state,
        order: [...state.order, action.payload],
      };

    case "UPDATE_ORDER":
      return {
        ...state,
        order: state.order.map((order) =>
          order.id === action.payload.id ? action.payload : order
        ),
      };

    case "SET_SNAP_TOKEN":
      return {
        ...state,
        snapToken: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
