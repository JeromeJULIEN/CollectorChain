import { SET_AUTH_ERROR, SET_DATA_ERROR, SET_USER_ERROR } from "../actions/error";

export const initialState = {
	auth: "",
	data: "",
	user: "",
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_AUTH_ERROR: {
			return {
				...state,
				auth: action.payload,
			};
		}
		case SET_DATA_ERROR: {
			return {
				...state,
				data: action.payload,
			};
		}
		case SET_USER_ERROR: {
			return {
				...state,
				user: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;
