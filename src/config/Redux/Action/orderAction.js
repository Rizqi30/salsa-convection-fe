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

export const getOrderBySnapTokenAll = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/order/snap/all`
      );
      dispatch({ type: "GET_ORDER_BY_SNAP_TOKEN", payload: res.data.orders });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOrderBySnapToken = (idUser) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/order/snap/${idUser}`
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
        `${import.meta.env.VITE_API_URL}/api/order/snapById/${id}`
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

export const storeOrders = (snap, data, id = 1, randomId) => {
  // Menambah product
  return async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/order/store`, {
        id: randomId,
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

export const getSnapToken = (total, order_id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/order`,
        {
          user_id: 1,
          order_id: order_id,
          total: total,
          status: "Unpaid",
        }
      );
      console.log(order_id);
      window.snap.pay(res.data.token);
      dispatch({ type: "SET_SNAP_TOKEN", payload: res.data.token });
    } catch (err) {
      console.log(err);
    }
  };
};
