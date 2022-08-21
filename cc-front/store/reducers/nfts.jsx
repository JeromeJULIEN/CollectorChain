export const initialState = {
	list: [
		{ id: 1, name: "Oyster Perpetual", price: 0.1 },
		{ id: 2, name: "GMT Master", price: 10 },
		{ id: 3, name: "Submariner Date", price: 1 },
		{ id: 4, name: "Day date", price: 100 },
	],
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
