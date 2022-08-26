export const initialState ={
    list:['red', 'blue','green','big', 'small']
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;