import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
	const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false);

	const manageSearchBarVisibility = (event) => {
		event.preventDefault();
		setIsSearchBarOpen(!isSearchBarOpen);
	};

	// Scroll to top on page load
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	return (
		<div className="header">
			{isSearchBarOpen ? (
				""
			) : (
				<Link to="/">
					<h1>Collector Chain</h1>
				</Link>
			)}
			<form
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
			</form>
			<button className="header__search" onClick={manageSearchBarVisibility}>
				<ion-icon name="search-outline"></ion-icon>
			</button>
			<button
				className="header__scrollToTop"
				onClick={() => {
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
				}}
			>
				<ion-icon name="push-outline"></ion-icon>
			</button>
		</div>
	);
};

export default Header;
