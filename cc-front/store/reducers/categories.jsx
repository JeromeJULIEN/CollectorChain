

export const initialState ={
    list:['Timepieces','Car models','Art','Luxury goods', 'Anime figurines', 'Cards', 'Wine','Anime figurines2', 'Cards2', 'Wine2']
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
