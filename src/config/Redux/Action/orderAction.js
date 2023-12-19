import axios from "axios";

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/order`);
      dispatch({ type: "GET_ORDERS", payload: res.data.orders });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOrderBySnapToken = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/order/snap`
      );
      dispatch({ type: "GET_ORDER_BY_SNAP_TOKEN", payload: res.data.orders });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOrderBySnapTokenId = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/order/snap/${id}`
      );
      dispatch({
        type: "GET_ORDER_BY_SNAP_TOKEN_ID",
        payload: res.data.orders,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const storeOrders = (snap, data, id = 1) => {
  // Menambah product
  return async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/order/store`, {
        user_id: id,
        product_id: data.product_id,
        size: data.size,
        quantity: data.quantity,
        color: data.color,
        price: data.price,
        snap_token: snap,
        status: "Unpaid",
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getSnapToken = (total) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/order`,
        {
          user_id: 1,
          total: total,
          status: "Unpaid",
        }
      );
      window.snap.pay(res.data.token);
      dispatch({ type: "SET_SNAP_TOKEN", payload: res.data.token });
    } catch (err) {
      console.log(err);
    }
  };
};
