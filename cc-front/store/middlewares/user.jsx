import instance from "../../utils/axios";
import { ADD_NFT_TO_FAVORITE, REMOVE_NFT_TO_FAVORITE, addNftToFavorite, removeNftToFavorite } from "../actions/user";

const userMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case ADD_NFT_TO_FAVORITE: {
			const { data } = await instance.patch(`/favoris/${action.userId}/${action.nftId}`);
			store.dispatch(setFavorites(data));
		}
		case REMOVE_NFT_TO_FAVORITE: {
			const { data } = await instance.delete(`/favoris/${action.userId}/${action.nftId}`);
			store.dispatch(setFavorites(data));
		}
		default:
			next(action);
	}
};

export default userMiddleware;
