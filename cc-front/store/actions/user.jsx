export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const SIGN_IN = 'SIGN_IN';
export const SET_USER_DATA = 'SET_USER_DATA';
export const LOGOUT = 'LOGOUT';

export const logout = () => ({
	type: LOGOUT,
});
export const setUserData = (data) => ({
	type: SET_USER_DATA,
	data,
});
export const signIn = () => ({
	type: SIGN_IN,
});
export const changeUserField = (value, name) => ({
	type: CHANGE_USER_FIELD,
	value,
	name,
});