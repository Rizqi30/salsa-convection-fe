import axios from "axios";
import { toast } from "react-toastify";

export const register = ($data, nav) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        $data
      );
      toast.success("Register success", {
        autoClose: 2000,
      }); // menampilkan toast

      setTimeout(() => {
        dispatch({ type: "SET_REGISTER_INFO", payload: res.data }); // set registration info
        nav("/login");
      }, 2000);
    } catch (err) {
      console.log(err);
      toast.error("Register gagal", {
        autoClose: 2000,
      });
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
      dispatch({ type: "SET_TOKEN", payload: res.data.access_token });
      localStorage.setItem("token", res.data.access_token); // menyimpan token
      toast.success("Login success", {
        autoClose: 2000,
      }); // menampilkan toast
      setTimeout(() => {
        // nav("/"); // menuju home
        dispatch(me(res.data.access_token, nav)); // mengambil data user
      }, 2000);
    } catch (err) {
      console.log(err);
      toast.error("Login gagal", {
        autoClose: 2000,
      });
    }
  };
};

export const me = ($data, nav) => {
  return async (dispatch) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${$data}`; // Bearer token me
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/me`
      );
      dispatch({ type: "SET_USER", payload: res.data });
      if (nav !== undefined) {
        nav("/" + res.data.id);
      }
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
      dispatch({ type: "SET_TOKEN", payload: "" });
      localStorage.removeItem("token"); // menghapus token
      dispatch({ type: "SET_USER", payload: {} });
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };
};
