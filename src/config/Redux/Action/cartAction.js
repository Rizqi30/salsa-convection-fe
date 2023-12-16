import axios from "axios";

export const getCarts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/cart`);
      console.log(res);
      dispatch({ type: "GET_CARTS", payload: res.data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const storeCarts = (data) => {
  // Menambah product
  return async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/cart/add`,
        data
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteCarts = (id) => {
  // Menghapus product
  return async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/cart/remove/${id}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};
