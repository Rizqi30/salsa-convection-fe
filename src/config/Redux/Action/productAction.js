import axios from "axios";

export const indexProducts = ($data) => {
  // Tampilkan seluruh product
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`,
        $data
      );
      console.log(res);
      dispatch({ type: "FETCH_ALL_PRODUCTS", payload: res.data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const showProductById = (id) => {
  // Tampilkan product by Id
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`
      );
      console.log(res);
      dispatch({ type: "GET_PRODUCT_BY_ID", payload: res.data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const storeProducts = ($data, image, navigate) => {
  // Menambah product
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/products`,
        {
          img: image,
          name: $data.name,
          price: $data.price,
          size: $data.size,
          color: $data.color,
          quantity: $data.quantity,
          description: $data.description,
          status: "New",
          sold: "0",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      navigate("/admin");
      dispatch({ type: "ADD_PRODUCT", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProductsById = (data, image, id, navigate) => {
  // Update product
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        {
          img: image,
          name: data.name,
          price: data.price,
          size: data.size,
          color: data.color,
          quantity: data.quantity,
          description: data.description,
          status: "New",
          sold: "0",
        }
      );

      dispatch({ type: "UPDATE_PRODUCT", payload: res.data });
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };
};

export const destroyProductsById = ($data) => {
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
