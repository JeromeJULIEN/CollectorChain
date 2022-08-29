
export const SET_NFTS = 'SET_NFTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_COLLECTIONS = 'SET_COLLECTIONS';
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_NFTS = 'FETCH_NFTS';
export const FETCH_NFT_BY_COLLECTION_ID = 'FETCH_NFT_BY_COLLECTION_ID';

export const fetchNftByCollectionId = (id) => ({
  type: FETCH_NFT_BY_COLLECTION_ID,
  id
});

export const fetchNfts = () => ({
  type: FETCH_NFTS
});

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES
});

export const setCollections = (payload) => ({
  type: SET_COLLECTIONS,
  payload
});

export const setCategories = (payload) => ({
  type: SET_CATEGORIES,
  payload
});

export const setNfts = (payload) => ({
  type: SET_NFTS,
  payload
});


export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS
});