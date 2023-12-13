import axios from "axios";

export const index = ($data) => {
  // Tampilkan seluruh product
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`,
        $data
      );
      console.log(res);
      dispatch({ type: "FETCH_ALL_PRODUCTS", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const show = ($data) => {
  // Tampilkan product by Id
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}api/products/{id}`,
        $data
      );
      console.log(res);
      dispatch({ type: "SHOW_PRODUCT_BY_ID", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const store = ($data) => {
  // Menambah product
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/products`,
        $data
      );
      console.log(res);
      dispatch({ type: "ADD_PRODUCT", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const update = ($data) => {
  // Update product
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/products/{id}`,
        $data
      );
      console.log(res);
      dispatch({ type: "UPDATE_PRODUCT", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const destroy = ($data) => {
  // Delete product
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/products/{id}`,
        $data
      );
      console.log(res);
      dispatch({ type: "DELETE_PRODUCT", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};
