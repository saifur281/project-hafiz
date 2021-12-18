import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null, singleUser: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        authData: action?.payload,
        loading: false,
        errors: null,
      };

    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };

    case actionType.GET_USER:
      return { ...state, authData: action.payload };

    case actionType.UPDATE_USER:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));

      return {
        ...state,
        authData: state.authData.map((user) =>
          user._id === action?.payload._id ? action?.payload : user
        ),
      };

    case actionType.GET_SINGLE_USER:
      return {
        ...state,
        singleUser: action?.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
