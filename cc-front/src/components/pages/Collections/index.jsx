import CollectionCard from "../../card/CollectionCard";
import SearchBarCollections from "../../searchBars/SearchBarCollectionsByCategory";

import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "../../hooks/useFetchWithInput";
import { Loader } from "rsuite";

import "./styles.scss";

const Collections = () => {
	// Infinite scroll
	const route = "/collections";
	const limit = 20;

	const [query, setQuery] = useState("");
	const [page, setPage] = useState(0);
	const { loading, error, list } = useFetch(query, page, route, limit);
	const loader = useRef(null);

	// // Si searchBar input
	// const handleChange = (e) => {
	// 	setQuery(e.target.value);
	// };

	const handleObserver = useCallback((entries) => {
		const target = entries[0];
		if (target.isIntersecting) {
			setPage((prev) => prev + 1);
		}
	}, []);

	useEffect(() => {
		const option = {
			root: null,
			rootMargin: "20px",
			threshold: 0,
		};
		const observer = new IntersectionObserver(handleObserver, option);
		if (loader.current) observer.observe(loader.current);
	}, [handleObserver]);

	// SearchBar Order by
	const sortPrice0to1 = (event) => {
		event.preventDefault();
		// const sortPrice0to1 = list.sort((a, b) => a.price - b.price);
		console.log("Low_To_High");
	};
	const sortPrice1to0 = (event) => {
		event.preventDefault();
		// const sortPrice1to0 = list.sort((a, b) => b.price - a.price);
		console.log("High_To_Low");
	};

	return (
		<div className="collections">
			<div className="collections__title">
				<h1>Collections</h1>
			</div>
			<SearchBarCollections sortPrice0to1={sortPrice0to1} sortPrice1to0={sortPrice1to0} />
			<div className="collections__list">
				{list.map((item, i) => (
					<CollectionCard key={i} img={item.image_url} text={item.name} />
				))}
				{loading && <Loader content="Loading..." />}
				{error && <p>Error!</p>}
				<div ref={loader} />
			</div>
		</div>
	);
};

export default Collections;
