import instance from "../../utils/axios";
import { NFT_CREATION } from "../actions/createNft";
import { ADD_NFT_TO_FAVORITE, FETCH_OWNED, REMOVE_NFT_TO_FAVORITE, setFavorites, setOwned } from "../actions/user";


const userMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case REMOVE_NFT_TO_FAVORITE: {
			await instance.delete(`/favorite/${action.userId}/${action.nftId}`);
			const { data } = await instance.get(`/favorite/${action.userId}`);
			console.log("DATA_REMOVE >>>", data);
			store.dispatch(setFavorites(data));
			break;
		}
		case ADD_NFT_TO_FAVORITE: {
			await instance.post(`/favorite/${action.userId}/${action.nftId}`);
			const { data } = await instance.get(`/favorite/${action.userId}`);
			console.log("DATA_ADD >>>", data);
			store.dispatch(setFavorites(data));
			break;
		}
		case NFT_CREATION: {
			const state = store.getState();
			const nftToCreate = state.createNft.nftToCreate;
			console.log("mdw >>> create nft avec :", nftToCreate);
			await instance.post('/nft', nftToCreate).then((response)=> console.log(response))
		}
		case FETCH_OWNED:{
			const {data} = await instance.get(`/${action.id}/nft`)
			console.log('owned nft >>>', data);
			store.dispatch(setOwned(data))
		}

		default:
			next(action);
	}
};

export default userMiddleware;
