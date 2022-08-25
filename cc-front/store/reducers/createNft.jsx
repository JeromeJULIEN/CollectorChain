import { DELETE_PROPERTY, STORE_PROPERTY, STORE_TEMP_PICTURE } from "../actions/createNft";

export const initialState = {
    name: "",
	media: "",
	tempMedia: "",
    properties:[],
    category:'',
    collection:'',
    model:'',
    serial:'',
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case STORE_TEMP_PICTURE: {
			return {
				...state,
				tempMedia: action.payload,
				}			
		};

        case STORE_PROPERTY:{
            return {
                ...state,
                properties :[
                    ...state.properties,
                    {name:action.property, tag:action.tag}
                ]
                
            }
        };

        case DELETE_PROPERTY:{
            console.log('entrée dans deleteProperty()', action.property)
            return {
                ...state,
                properties: state.properties.filter(property => property.name !== action.property)
            }

        }

		default:
			return state;
	}
};

export default reducer;