import {
  AUTH,
  GET_SINGLE_USER,
  GET_USER,
  UPDATE_USER,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, payload: data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    dispatch({ type: GET_USER, payload: data });
  } catch (error) {}
};

export const updatedUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);

    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUsers = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSingleUser(id);
    dispatch({ type: GET_SINGLE_USER, payload: data });
  } catch (error) {}
};
