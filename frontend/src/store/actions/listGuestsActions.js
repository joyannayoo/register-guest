import { SET_GUESTS } from "./actionTypes";
import Axios from "../../axios/authenticated";

export const listGuestsAction = (guests) => {
  return {
    type: SET_GUESTS,
    payload: guests,
  };
};

export const listGuestsFunction = () => async (dispatch) => {
  try {
    const response = await Axios.get("guests/");
    dispatch(listGuestsAction(response.data));
  } catch (e) {
    console.log("error in listguests", e.response);
  }
};
