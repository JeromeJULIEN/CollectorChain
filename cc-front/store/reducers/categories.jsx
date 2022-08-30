import { SET_CATEGORIES } from "../actions/data";


export const initialState ={
    list:[
		{id:1,
		name:'Timepieces test',
		description:'',
		media :'https://cdn1.iconfinder.com/data/icons/fashion-40/64/wristwatch-clock-time-watches-512.png'
		},
		{id:2,
		name:'Car models',
		description:'',
		media :'https://cdn1.iconfinder.com/data/icons/car-indicators/512/sport-tuning-car-auto-model-512.png'
		},
		{id:3,
		name:'Luxury goods',
		description:'',
		media :'https://cdn3.iconfinder.com/data/icons/bag-store-1/100/5-512.png'
		},
		{id:4,
		name:'Digital art',
		description:'',
		media :'https://cdn0.iconfinder.com/data/icons/non-fungible-token/512/NFT-Blockchain-crypto-13-512.png'
		},
		{id:5,
		name:'Anime figurine',
		description:'',
		media :'https://icons.iconarchive.com/icons/icons8/ios7/512/City-Statue-icon.png'
		},
		{id:6,
		name:'Collections cards',
		description:'',
		media :'https://cdn-icons-png.flaticon.com/512/1974/1974070.png'
		},
		{id:7,
		name:'Wine',
		description:'',
		media :'http://cdn.onlinewebfonts.com/svg/img_480319.png'
		},
		// 'Car models','Digital Art','Luxury goods', 'Anime figurines', 'Cards', 'Wine','Anime figurines2', 'Cards2', 'Wine2']
	]
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_CATEGORIES:{
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
