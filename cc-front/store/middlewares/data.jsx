import instance from "../../utils/axios";
import { FETCH_DATA } from "../actions/data";

const dataMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		
        case FETCH_DATA:{
            // const {data} = await instance.get('/categories')
            console.log('data form API /categories >>>')
        }

		default:
			next(action);
	}
};

export default dataMiddleware;