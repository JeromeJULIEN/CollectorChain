import instance from "../../utils/axios";
import { FETCH_CATEGORIES, FETCH_COLLECTIONS, FETCH_NFTS, FETCH_NFT_BY_COLLECTION_ID, FETCH_NFT_BY_ID, setCategories, setCollections, setDisplayNft, setNfts } from "../actions/data";

const dataMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case FETCH_CATEGORIES: {
			console.log("entrée dans mdw data > fetchCategories");
			const { data } = await instance.get("/categories");
			store.dispatch(setCategories(data));
		};
		case FETCH_COLLECTIONS: {
			console.log("entrée dans mdw data > fetchCollections");
			const { data } = await instance.get("/collections");
			store.dispatch(setCollections(data));
		};
		case FETCH_NFTS: {
			console.log("entrée dans mdw data > fetchNfts");
			const { data } = await instance.get("/nft");
			store.dispatch(setNfts(data));
		};
		case FETCH_NFT_BY_COLLECTION_ID: {
			console.log("entrée dans mdw data > fetchNftByCategory");
			const { data } = await instance.get(`/collections/${action.id}/nft`);
			store.dispatch(setNfts(data));
		};
        case FETCH_NFT_BY_ID:{
			console.log("entrée dans mdw data > fetchNftByid", action.id);

			const {data} = await instance.get(`/nft/${action.id}`);
            store.dispatch(setDisplayNft(data))
			}

		default:
			next(action);
	}
};

export default dataMiddleware;
