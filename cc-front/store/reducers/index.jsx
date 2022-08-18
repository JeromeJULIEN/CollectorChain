import { combineReducers } from 'redux';

import userReducer from './user';
import cardReducer from './card';

const rootReducer = combineReducers({
	user: userReducer,
	card: cardReducer,
});

export default rootReducer;