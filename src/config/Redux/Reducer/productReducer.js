const initialState = {
  allProducts: [],
  productById: {},
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };

    case "GET_PRODUCT_BY_ID":
      return {
        ...state,
        productById: action.payload,
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        allProducts: state.allProducts.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        allProducts: state.allProducts.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
