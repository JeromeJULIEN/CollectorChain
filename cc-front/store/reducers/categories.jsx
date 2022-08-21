
export const initialState ={
    list:['Timepieces','Car models','Art','Luxury goods', 'Anime figurines', 'Cards', 'Wine','Anime figurines', 'Cards', 'Wine']
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
