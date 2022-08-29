
import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'rsuite';
import './styles.scss'

const Header = () => {
	const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false);
	// // Scroll to top on page load
	// useEffect(() => {
	// 	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	// }, []);

	const manageSearchBarVisibility = (event) => {
		event.preventDefault();
		setIsSearchBarOpen(!isSearchBarOpen);
	};

	const navigate = useNavigate()

	const navToResults = (event) => {
		event.preventDefault()
		navigate('/results')
		setIsSearchBarOpen(!isSearchBarOpen)
	}
	
	return (
		<div className="header">
			{isSearchBarOpen?
			<>
			<form action="" onSubmit={navToResults}>
			<Input placeholder='Search Categories, collections or NFTs' />
			</form>
			<ion-icon name="close-circle" onClick={manageSearchBarVisibility}></ion-icon>
			</>
			:
			<>
			<Link to='/'><h1>Collector Chain</h1></Link>
			<ion-icon name="search-circle" onClick={manageSearchBarVisibility}></ion-icon>
			</>
			}
			<button
				className="header__scrollToTop"
				onClick={() => {
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
				}}
			>
				<ion-icon name="push-outline"></ion-icon>
			</button>
			
			{/* <form
>>>>>>> jerome
			// onSubmit={handleSubmitForm}
			>
				<input
					placeholder="Search collections & NFT"
					// onChange={handleChange}
					type="text"
					id="searchBar"
					name="searchBar"
					className={isSearchBarOpen ? "header__searchBar-open" : "header__searchBar"}
				/>
<<<<<<< HEAD
			</form>
			<button className="header__search" onClick={manageSearchBarVisibility}>
				<ion-icon name="search-outline"></ion-icon>
			</button>
=======
			</form> */}
		</div>
	);
};

export default Header;
