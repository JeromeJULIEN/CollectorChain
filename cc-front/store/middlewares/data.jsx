import instance from "../../utils/axios";
import { FETCH_CATEGORIES, FETCH_COLLECTIONS, FETCH_COLLECTION_BY_ID, FETCH_NFTS, FETCH_NFT_BY_COLLECTION_ID, FETCH_NFT_BY_ID, setCategories, setCollections, setDisplayedCollection, setDisplayNft, setNfts } from "../actions/data";

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
			};
			case FETCH_COLLECTION_BY_ID:{
			console.log("entrée dans mdw data > fetchCollectionByid", action.id);
			const {data} = await instance.get(`/collection/${action.id}`);
			store.dispatch(setDisplayedCollection(data))
			}

		default:
			next(action);
	}
};

export default dataMiddleware;
