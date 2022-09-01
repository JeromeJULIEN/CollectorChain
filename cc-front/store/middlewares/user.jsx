import instance from "../../utils/axios";
import { ADD_NFT_TO_FAVORITE, REMOVE_NFT_TO_FAVORITE, setFavorites } from "../actions/user";

const userMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case ADD_NFT_TO_FAVORITE: {
			console.log("action:", action.userId, action.nftId);
			await instance.post(`/favorite/${action.userId}/${action.nftId}`);
			const { data } = await instance.get(`/favorite/${action.userId}`);
			store.dispatch(setFavorites(data));
		}
		case REMOVE_NFT_TO_FAVORITE: {
			await instance.delete(`/favorite/${action.userId}/${action.nftId}`);
			const { data } = await instance.get(`/favorite/${action.userId}`);
			store.dispatch(setFavorites(data));
		}
		default:
			next(action);
	}
};

export default userMiddleware;
