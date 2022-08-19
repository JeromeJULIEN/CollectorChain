import { combineReducers } from 'redux';

import userReducer from './user';
import categoriesReducer from './categories';
import collectionsReducer from './collections'

const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	collections: collectionsReducer,
});

export default rootReducer;