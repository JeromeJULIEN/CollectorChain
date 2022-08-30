import CollectionCard from "../../card/CollectionCard";
import SearchBarCollections from "../../searchBars/SearchBarCollectionsByCategory";

import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "../../hooks/useFetchWithInput";
import { Loader } from "rsuite";

import "./styles.scss";
import { useSelector } from "react-redux";

const Collections = () => {
	// Infinite scroll
	const route = "/collections";
	const limit = 2;

	const [query, setQuery] = useState("");
	const [page, setPage] = useState(0);
	//! j'ai enlevé le 'list' du useFetch car ca buggé pour charger les images de la BDD
	// const { loading, error, list } = useFetch(query, page, route, limit);
	const { loading, error } = useFetch(query, page, route, limit);
	const loader = useRef(null);

	const list = useSelector((state) => state.collections.list);

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
	const sortAtoZ = (event) => {
		event.preventDefault();
		const sortNameAtoZ = list.sort((a, b) => a.name - b.name);
		console.log("A_To_Z");
	};
	const sortZtoA = (event) => {
		event.preventDefault();
		// const sortNameZtoA = list.sort((a, b) => b.name - a.name);
		console.log("Z_To_A");
	};

	return (
		<div className="collections">
			<div className="collections__title">
				<h1>Collections</h1>
			</div>
			<SearchBarCollections sortPrice0to1={sortPrice0to1} sortPrice1to0={sortPrice1to0} sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
			<div className="collections__list">
				{list.map((collection) => (
					<CollectionCard key={collection.id} media={collection.media} text={collection.name} id={collection.id} />
				))}

				{loading && <Loader content="Loading..." />}
				{error && <p>Error!</p>}
				<div ref={loader} />
			</div>
		</div>
	);
};

export default Collections;
