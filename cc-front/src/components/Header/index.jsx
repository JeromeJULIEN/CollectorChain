import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "rsuite";
import "./styles.scss";
import { eraseSearch, fetchSearch } from "../../../store/actions/data";

const Header = () => {
	const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false);
	// // Scroll to top on page load
	// useEffect(() => {
	// 	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	// }, []);

	const dispatch = useDispatch()

	const manageSearchBarVisibility = (event) => {
		event.preventDefault();
		setIsSearchBarOpen(!isSearchBarOpen);
	};

	//! Gestion recherche dynamique
	// Variable local du champ de recherche
	const [query,setQuery] = useState('')

	const handleQuery = (event) => {
		// console.log('query', event);
		setQuery(event)
	}
	// Lancement de l'appel API si query de 3 caractères au moins
	useEffect(()=>{
		if (query.length>2) {
			// console.log('query ok pour appel API');
			dispatch(fetchSearch(query))
		} else {
			// sinon suppression du resulat pour avoir un tableau falsy pour gérer l'affichage conditionnel de la liste
			dispatch(eraseSearch())
		}
	},[query])

	const result = useSelector(state => state.search.list)
	
	

	return (
		<div className="header">
			{isSearchBarOpen ? (
				<>
					<form action="" >
						<Input placeholder="Search Categories, collections or NFTs" onChange={handleQuery}/>
					</form>
					<div className="header__btn">
						<ion-icon name="close-circle" onClick={manageSearchBarVisibility}></ion-icon>
						<button
							className="header__scrollToTop"
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
							}}
						>
							<ion-icon name="push-outline"></ion-icon>
						</button>
					</div>
				</>
			) : (
				<>
					<Link to="/">
						<h1>Collector Chain</h1>
					</Link>
					<div className="header__btn">
						<ion-icon name="search-circle" onClick={manageSearchBarVisibility}></ion-icon>
						<button
							className="header__scrollToTop"
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
							}}
						>
							<ion-icon name="push-outline"></ion-icon>
						</button>
					</div>
				</>
			)}

			
		</div>
	);
};

export default Header;
