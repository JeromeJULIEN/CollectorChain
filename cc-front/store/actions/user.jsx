export const CHANGE_USER_FIELD = "CHANGE_USER_FIELD";
export const LOG_IN = "LOG_IN";
export const SET_USER_DATA = "SET_USER_DATA";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const UPDATE_USER_FIELD = "UPDATE_USER_FIELD";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const IS_OPEN_TO_CONTACT = "IS_OPEN_TO_CONTACT";
export const SET_MEDIA_URL = "SET_MEDIA_URL";
export const DELETE_MEDIA_URL = "DELETE_MEDIA_URL";
export const SET_SHOWCASE_NFT = "SET_SHOWCASE_NFT";

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
export const isOpenToContact = (value) => ({
	type: IS_OPEN_TO_CONTACT,
	value,
});
export const setMediaUrl = (name, value) => ({
	type: SET_MEDIA_URL,
	name,
	value,
});
export const deleteMediaUrl = (name) => ({
	type: DELETE_MEDIA_URL,
	name,
});
export const setShowcaseNftDisplayed = (media, id) => ({
	type: SET_SHOWCASE_NFT,
	media,
	id
});
