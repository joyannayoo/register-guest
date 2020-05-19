import {LOGIN, LOGIN_ERROR, LOGOUT} from '../actionTypes';
import Axios from '../../../axios/not_authenticated';

export const loginAction = ({token, user}) => {
	return ({
		type: LOGIN,
		payload: {token, user}
	})
}


export const loginErrorAction = error => {
	return {
		type: LOGIN_ERROR,
		payload: error
	}
}


export const logoutAction = () => {
	return {
		type: LOGOUT
	}
}


export const login = ({ email, password }) => async (dispatch) => {
	try {
		const response = await Axios.post('token/', { email, password });
		const token = response.data.access;
		const user = response.data.user
		localStorage.setItem('token', token);
		dispatch(loginAction({token, user}));
		return response
	} catch (e) {
		dispatch(loginErrorAction('The credentials are not valid'));
		return e
	}
};
