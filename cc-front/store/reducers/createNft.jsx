import { STORE_TEMP_PICTURE } from "../actions/createNft";

export const initialState = {
    name: "",
	media: "",
	tempMedia: "",
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case STORE_TEMP_PICTURE: {
			console.log("entrée dans storeTempPicture avec", action.payload);
			return {
				...state,
				tempMedia: action.payload,
				}			
		};

		default:
			return state;
	}
};

export default reducer;