const initialState = {
  token: "",
  user: {},
  registerInfo: {}, // menyimpan data
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };

    case "SET_REGISTER_INFO":
      return {
        ...state,
        registerInfo: action.payload, // menampung data
      };

    case "SET_USER": // Untuk mendapatkan data kita
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
