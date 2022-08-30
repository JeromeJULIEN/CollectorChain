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

	const [sortList, setSortList] = useState([...list]);

	// SearchBar Order by

	// useEffect(() => {
	const sortPrice0to1 = () => {
		const sortPrice0to1 = sortList.sort((a, b) => a.name - b.name);
		setSortList(sortPrice0to1);
		console.log("Low_To_High");
	};
	const sortPrice1to0 = () => {
		// const sortPrice1to0 = list.sort((a, b) => b.price - a.price);
		console.log("High_To_Low");
	};
	// }, [sortList]);
	console.log("SortList>>>", sortList);
	console.log("List>>>", list);

	return (
		<div className="collections">
			<div className="collections__title">
				<h1>Collections</h1>
			</div>
			<SearchBarCollections sortPrice0to1={sortPrice0to1} sortPrice1to0={sortPrice1to0} />
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
