import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const reducer = combineReducers({
  authReducer,
  productReducer,
  cartReducer,
  orderReducer,
});

export default reducer;
