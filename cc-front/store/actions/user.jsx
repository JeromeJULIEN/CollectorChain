export const CHANGE_USER_FIELD = "CHANGE_USER_FIELD";
export const LOG_IN = "LOG_IN";
export const SET_USER_DATA = "SET_USER_DATA";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const UPDATE_USER_FIELD = "UPDATE_USER_FIELD";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const signUp = () => ({
	type: SIGNUP,
});

export const logout = () => ({
	type: LOGOUT,
});
export const setUserData = (data) => ({
	type: SET_USER_DATA,
	data,
});
export const logIn = () => ({
	type: LOG_IN,
});
export const changeUserField = (value, name) => ({
	type: CHANGE_USER_FIELD,
	value,
	name,
});
export const updateProfile = () => ({
	type: UPDATE_PROFILE,
});
export const updateUserField = (value, name) => ({
	type: UPDATE_USER_FIELD,
	value,
	name,
});
