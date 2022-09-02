import { CHANGE_NFT_FIELD, DELETE_NFT_MEDIA, DELETE_PROPERTY, SET_CREATOR_ID, STORE_CATEGORY, STORE_COLLECTION, STORE_DESCRIPTION, STORE_NFT_MEDIA, STORE_PROPERTY, STORE_TEMP_PICTURE } from "../actions/createNft";

export const initialState = {
    name: "",
	media: "",
	tempMedia: "",
    properties:[],
    category:'',
    collection_id:'',
    model:'',
    serial:'',
    rarity:'',
    description:'',
    creator_id:'',
    owner_id:'',
    token:'xxxxxxxxx'
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
            return {
                ...state,
                properties: state.properties.filter(property => property.name !== action.property)
            }

        };

        case STORE_NFT_MEDIA:{
            return {
                ...state,
                media:action.payload

            }

        }

        case DELETE_NFT_MEDIA:{
            return {
                ...state,
                media:''
            }
        };

        case STORE_DESCRIPTION:{
            return{
                ...state,
                description: action.payload
            }
        };

        case STORE_CATEGORY:{
            return{
                ...state,
                category: action.payload
            }
        };

        case CHANGE_NFT_FIELD:{
            return{
                ...state,
                [action.name]:action.value
            }
        };
        case STORE_COLLECTION:{
            return{
                ...state,
                collection_id:action.payload
            }
        };
        case SET_CREATOR_ID:{
            return{
                ...state,
                creator_id:action.id,
                owner_id:action.id
            }
        }

		default:
			return state;
	}
};

export default reducer;

