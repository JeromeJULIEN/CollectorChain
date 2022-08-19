import { combineReducers } from 'redux';

import userReducer from './user';
import categoriesReducer from './categories';
import collectionsReducer from './collections';
import nftsReducer from './nfts';

const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	collections: collectionsReducer,
	nfts: nftsReducer
});

export default rootReducer;