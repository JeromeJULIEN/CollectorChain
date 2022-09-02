import instance from "../../utils/axios";
import { NFT_CREATION } from "../actions/createNft";
import { ADD_NFT_TO_FAVORITE, REMOVE_NFT_TO_FAVORITE, setFavorites } from "../actions/user";
import { setUserError } from "../actions/error";

const userMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case REMOVE_NFT_TO_FAVORITE: {
			let result;
			let data;
			let resultErr;
			try {
				await instance.delete(`/favorite/${action.userId}/${action.nftId}`);
				result = await instance.get(`/favorite/${action.userId}`);
			} catch (error) {
				console.log(error);
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
				store.dispatch(setFavorites(data));
			} else {
				store.dispatch(setUserError(resultErr));
			}
			console.log("DATA_REMOVE >>>", data);
			break;
		}
		case ADD_NFT_TO_FAVORITE: {
			let result;
			let data;
			let resultErr;
			try {
				await instance.post(`/favorite/${action.userId}/${action.nftId}`);
				result = await instance.get(`/favorite/${action.userId}`);
			} catch (error) {
				console.log(error);
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
				store.dispatch(setFavorites(data));
			} else {
				store.dispatch(setUserError(resultErr));
			}
			console.log("DATA_ADD >>>", data);
			break;
		}
		case NFT_CREATION: {
			const state = store.getState();
			const nftToCreate = state.createNft;
			console.log("mdw >>> create nft avec :", nftToCreate);
		}

		default:
			next(action);
	}
};

export default userMiddleware;
