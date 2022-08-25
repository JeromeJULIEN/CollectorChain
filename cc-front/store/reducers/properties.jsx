export const initialState ={
    list:['color', 'size','mechanism','glass']
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;