import axios from "axios";

export const register = ($data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        $data
      );
      console.log(res);
      dispatch({ type: "SET_REGISTER_INFO", payload: res.data }); // set registration info
    } catch (err) {
      console.log(err);
    }
  };
};

export const login = ($data, nav) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        $data
      );
      console.log(res);
      dispatch({ type: "SET_TOKEN", payload: res.data.access_token });
      localStorage.setItem("token", res.data.access_token); // menyimpan token
      nav("/"); // menuju home
    } catch (err) {
      console.log(err);
    }
  };
};

export const me = ($data) => {
  return async (dispatch) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${$data}`; // Bearer token me
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/me`
      );
      console.log(res);
      dispatch({ type: "SET_USER", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = ($data) => {
  return async (dispatch) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${$data}`; // Bearer token me
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`
      );
      console.log(res);
      dispatch({ type: "SET_TOKEN", payload: "" });
      localStorage.removeItem("token"); // menghapus token
      dispatch({ type: "SET_USER", payload: {} });
    } catch (err) {
      console.log(err);
    }
  };
};
