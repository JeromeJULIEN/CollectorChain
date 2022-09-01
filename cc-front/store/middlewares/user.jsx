import instance from "../../utils/axios";
import { ADD_NFT_TO_FAVORITE, REMOVE_NFT_TO_FAVORITE, addNftToFavorite, removeNftToFavorite } from "../actions/user";

const userMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case ADD_NFT_TO_FAVORITE: {
			await instance.post(`/favoris/${action.userId}/${action.nftId}`);
			const { data } = await instance.get(`/favoris/${action.userId}`);
			store.dispatch(setFavorites(data));
		}
		case REMOVE_NFT_TO_FAVORITE: {
			await instance.delete(`/favoris/${action.userId}/${action.nftId}`);
			const { data } = await instance.get(`/favoris/${action.userId}`);
			store.dispatch(setFavorites(data));
		}
		default:
			next(action);
	}
};

export default userMiddleware;
