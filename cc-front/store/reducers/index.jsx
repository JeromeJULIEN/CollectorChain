import { combineReducers } from 'redux';

import userReducer from './user';
import categoriesReducer from './categories';
import collectionsReducer from './collections';
import nftsReducer from './nfts';
import createNftreducer from './createNft';
import propertiesReducer from './properties';
import tagsReducer from './tags';

const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	collections: collectionsReducer,
	nfts: nftsReducer,
	createNft : createNftreducer,
	properties : propertiesReducer,
	tags: tagsReducer
});

export default rootReducer;