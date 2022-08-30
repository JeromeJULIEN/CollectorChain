import CollectionCard from "../../card/CollectionCard";
import SearchBarCollections from "../../searchBars/SearchBarCollectionsByCategory";

import React, { useState, useRef, useEffect, useCallback } from "react";
// import useFetch from "../../hooks/useFetchWithInput";
// import { Loader } from "rsuite";

import "./styles.scss";
import { useSelector } from "react-redux";

const Collections = () => {
	// // Infinite scroll
	// const route = "/collections";
	// const limit = 20;

	// const [query, setQuery] = useState("");
	// const [page, setPage] = useState(0);
	// const { loading, error, list } = useFetch(query, page, route, limit);
	// const loader = useRef(null);

	// // Si searchBar input
	// const handleChange = (e) => {
	// 	setQuery(e.target.value);
	// };

	// const handleObserver = useCallback((entries) => {
	// 	const target = entries[0];
	// 	if (target.isIntersecting) {
	// 		setPage((prev) => prev + 1);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	const option = {
	// 		root: null,
	// 		rootMargin: "20px",
	// 		threshold: 0,
	// 	};
	// 	const observer = new IntersectionObserver(handleObserver, option);
	// 	if (loader.current) observer.observe(loader.current);
	// 	console.log(list.length);
	// }, [handleObserver]);

	const list = useSelector((state) => state.collections.list);

	// SearchBar Order by
	const [sortList, setSortList] = useState([]);

	useEffect(() => {
		if (list) {
			setSortList(list);
		}
	}, [list]);

	useEffect(() => {
		setSortList(sortList);
	}, []);

	const sortPopularity0to1 = () => {
		const sortPopularity0to1 = sortList.sort((a, b) => a.popularity - b.popularity);
		setSortList(sortPopularity0to1);
		console.log("Popularity_Low_To_High");
	};
	const sortPopularity1to0 = () => {
		const sortPopularity1to0 = sortList.sort((a, b) => b.popularity - a.popularity);
		setSortList(sortPopularity1to0);
		console.log("Popularity_High_To_Low");
	};
	const sortAtoZ = () => {
		const sortAZ = list.sort((a, b) => a.name.localeCompare(b.name));
		const sortAtoZ = [...sortAZ];
		setSortList(sortAtoZ);
		console.log("Alph_A_to_Z>>>", sortAtoZ);
	};
	const sortZtoA = () => {
		const sortZA = list.sort((a, b) => b.name.localeCompare(a.name));
		const sortZtoA = [...sortZA];
		setSortList(sortZtoA);
		console.log("Alph_Z_To_A", sortZtoA);
	};

	// }, [sortList]);
	console.log("List>>>", list);
	console.log("SortList>>>", sortList);

	return (
		<div className="collections">
			<div className="collections__underHeader">
				<h1>Collections</h1>
				<SearchBarCollections sortPopularity0to1={sortPopularity0to1} sortPopularity1to0={sortPopularity1to0} sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
			</div>
			<div className="collections__list">
				{sortList.map((collection) => (
					<CollectionCard key={collection.id} media={collection.media} text={collection.name} id={collection.id} />
				))}

				{/* {loading && <Loader content="Loading..." />}
				{error && <p>Error!</p>}
				<div ref={loader} /> */}
			</div>
		</div>
	);
};

export default Collections;
