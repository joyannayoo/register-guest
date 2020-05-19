import { ADD_GUEST } from "./actionTypes";
import Axios from "../../axios/authenticated";

export const addGuestAction = (guest) => {
  return {
    type: ADD_GUEST,
    payload: guest,
  };
};

export const addGuestFunction = (data) => async (dispatch) => {
  try {
    const response = await Axios.post("guests/", data);
    dispatch(addGuestAction(response.data));
  } catch (e) {
    console.log('this is the error', e.response);
  }
};
