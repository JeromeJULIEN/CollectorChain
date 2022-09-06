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

	const showSearchBar = (event) => {
		event.preventDefault();
		setIsSearchBarOpen(true);
	};

	const hideSearchBar = (event) => {
		event.preventDefault();
		setIsSearchBarOpen(false);
		dispatch(eraseSearch())
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

	// Recupération des resutats dans des constantes distinctes
	const result = useSelector(state => state.search.list)
	const [categoryResult,setCategoryResult] =useState([])
	const [collectionResult,setCollectionResult] =useState([])
	const [nftResult,setNftResult] =useState([])
	// utilisation d'un if pour éviter erreur de tableau vide. Utilisation d'un usseEffect pour éviter boucle infinie
	useEffect(()=> {
		if (result) {
			setCategoryResult(result[0].category)
			setCollectionResult(result[1].collection)
			setNftResult(result[2].nft)
		}
	},[result])


	const hideResult =() => {
		dispatch(eraseSearch())
	}

	// gestion de la fermeture de la barre de recherche apres click sur resultat
	const location=useLocation()
	useEffect(() =>{
		setIsSearchBarOpen(false)
	},[location])
	


	console.log('categorie result length',categoryResult.length);
		

	return (
		<div className="header">
			<div className="menu">
			{isSearchBarOpen ? (
				<>
					<form action="" >
						<Input placeholder="Search Categories, collections or NFTs" onChange={handleQuery}/>
					</form>
					<div className="menu__btn">
						<ion-icon name="close-circle" onClick={hideSearchBar}></ion-icon>
						<button
							className="menu__scrollToTop"
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
					<div className="menu__btn">
						<ion-icon name="search-circle" onClick={showSearchBar}></ion-icon>
						<button
							className="menu__scrollToTop"
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
			{result?
			<>
			<div className="result">
				<div className="result__title">{categoryResult.length < 1? 'Categories ...no result' :'Categories' }</div>
				{categoryResult.length < 1 &&
				<p>No result</p> }				
				{categoryResult.map(result => (
					<Link to={`/category/${result.id}/collection`} onClick={hideResult}>
						<li className="result__item" key={result.name}>{result.name}</li>
						<img src={result.media} alt="" />
					</Link>))}
				
				
				<div className="result__title">{collectionResult.length < 1? 'Collections ...no result' :'Collections' }</div>
				{collectionResult.map(result => (
					<Link className="result__item" to={`/collection/${result.id}`} onClick={hideResult}>
						<li  key={result.name}>{result.name}</li>
						<img src={result.media} alt="" />
					</Link>))}
				<div className="result__title">{nftResult.length < 1? 'NFT ...no result' :'NFT' }</div>
				{nftResult.map(result => (
					<Link className="result__item" to={`/nft/${result.id}`} onClick={hideResult}>
						<li  key={result.name}>{result.name}</li>
						<img src={result.media} alt="" />
					</Link>))}

			</div>
			</>
			:
			''}
		

			
		</div>
	);
};

export default Header;
