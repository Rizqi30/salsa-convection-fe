import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
  authReducer,
  productReducer,
  cartReducer,
});

export default reducer;
