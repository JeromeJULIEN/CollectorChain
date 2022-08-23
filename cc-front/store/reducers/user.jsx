import { UPDATE_USER_FIELD, CHANGE_USER_FIELD, LOGOUT, SET_USER_DATA } from "../actions/user";

export const initialState = {
	id: 1,
	email: "user@user.com",
	nickname: "nickname",
	// token: null,
	// logged: false,
	password: "password",
	passwordConfirm: "password",
	wallet: 150,
	isAdmin: false,
	media: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case CHANGE_USER_FIELD:
			return {
				...state,
				// [ action.name ] permet d'utiliser une variable qui sera évaluer (on récupère la valeur de cette variable) pour définir le nom de la propriété
				[action.name]: action.value,
			};
		case UPDATE_USER_FIELD:
			return {
				...state,
				// [ action.name ] permet d'utiliser une variable qui sera évaluer (on récupère la valeur de cette variable) pour définir le nom de la propriété
				[action.name]: action.value,
			};
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			};
		case LOGOUT:
			return {
				...state,
				logged: false,
				pseudo: null,
				token: null,
			};
		default:
			return state;
	}
};

export default reducer;
