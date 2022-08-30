import instance from "../../utils/axios";
<<<<<<< HEAD
import { FETCH_CATEGORIES, FETCH_COLLECTIONS, FETCH_COLLECTION_BY_ID, FETCH_NFTS, setCategories, setCollections, setNfts } from "../actions/data";

const dataMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case FETCH_CATEGORIES: {
			const { data } = await instance.get("/categories");
			store.dispatch(setCategories(data));
		}
		// case FETCH_COLLECTIONS: {
		// 	const { data } = await instance.get("/collections");
		// 	store.dispatch(setCollections(data));
		// }
		case FETCH_NFTS: {
			const { data } = await instance.get("/nft");
			store.dispatch(setNfts(data));
		}
		case FETCH_COLLECTION_BY_ID: {
			const { data } = await instance.get(`/collection/${action.id}/nft`);
			store.dispatch(setNfts(data));
		}
=======
import { FETCH_CATEGORIES, FETCH_COLLECTIONS, FETCH_NFTS, FETCH_NFT_BY_COLLECTION_ID, setCategories, setCollections, setNfts} from "../actions/data";

const dataMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		
        case FETCH_CATEGORIES:{
            const {data} = await instance.get('/categories')
            store.dispatch(setCategories(data))
        };
        case FETCH_COLLECTIONS:{
            const {data} = await instance.get('/collections')
            store.dispatch(setCollections(data))
        };
        case FETCH_NFTS:{
            const {data} = await instance.get('/nft')
            store.dispatch(setNfts(data))
        };
        case FETCH_NFT_BY_COLLECTION_ID:{
            console.log('fetch avec id>>>',action.id);
            const {data} = await instance.get(`/collections/${action.id}/nft`)
            store.dispatch(setNfts(data))
        };
>>>>>>> olivier

		default:
			next(action);
	}
};

export default dataMiddleware;
