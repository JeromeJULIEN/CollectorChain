import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const sendQuery = useCallback(async () => {
		try {
			await setLoading(true);
			await setError(false);
			// const res = await axios.get(`https://api.opensea.io/api/v1/collections?offset=0&limit=300&q=${query}&page=${page}`);
			const res = await axios.get(`https://api.opensea.io/api/v1/collections?limit=20&offset=${page}`);
			await setList((prev) => [...new Set([...prev, ...res.data.collections.map((d) => d)])]);
			setLoading(false);
		} catch (err) {
			setError(err);
		}
	}, [query, page]);

	useEffect(() => {
		sendQuery(query);
	}, [query, sendQuery, page]);

	return { loading, error, list };
}

export default useFetch;
