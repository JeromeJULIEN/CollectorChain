import { SET_COLLECTIONS } from "../actions/data";

export const initialState = {
	list: ["Rolex", "Breitling", "Baume & Mercier", "Bell & Ross", "test5", "test6", "test7", "test8", "test9", "test10", "test11", "test12"],
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_COLLECTIONS:{
			return{
				...state,
				list:action.payload
			}
		}
		default:
			return state;
	}
};

export default reducer;
