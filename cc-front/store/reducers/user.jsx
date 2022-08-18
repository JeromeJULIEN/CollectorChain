import { CHANGE_USER_FIELD, LOGOUT, SET_USER_DATA } from '../actions/user';

export const initialState = {
	pseudo: null,
	token: null,
	logged: false,
	email: 'user@user.com',
	password: 'password',
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case CHANGE_USER_FIELD:
			return {
				...state,
				// [ action.name ] permet d'utiliser une variable qui sera évaluer (on récupère la valeur de cette variable) pour définir le nom de la propriété
				[ action.name ]: action.value,
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