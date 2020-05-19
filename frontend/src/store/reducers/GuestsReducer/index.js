import { SET_GUESTS, ADD_GUEST, DELETE_GUEST } from "../../actions/actionTypes";

export default function guests(state = [], action) {
  switch (action.type) {
    case SET_GUESTS: {
      return action.payload;
    }
    case ADD_GUEST: {
      return [...state, action.payload];
    }
    case DELETE_GUEST: {
      return state.filter(c => c.id !== action.payload)
    }
    default:
      return state;
  }
}
