import { DELETE_GUEST } from "./actionTypes";
import Axios from "../../axios/authenticated";
import {listGuestsFunction} from "./listGuestsActions";

export const deleteGuestAction = (guest) => {
  return {
    type: DELETE_GUEST,
    payload: guest,
  };
};

export const deleteGuestFunction = (id) => async (dispatch) => {
  try {
    const response = await Axios.delete(`guests/${id}`);
    dispatch(listGuestsFunction());
    dispatch(deleteGuestAction(response.data));
  } catch (e) {
    console.log('this is the error', e.response);
  }
};