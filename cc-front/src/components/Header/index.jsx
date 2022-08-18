import React from 'react'
import './styles.scss'

const Header = () => {
	const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false)

	const manageSearchBarVisibility = (event) => {
		event.preventDefault()
		setIsSearchBarOpen(!isSearchBarOpen)
	}
	
	return (
		<div className="header">
			{isSearchBarOpen?'':
			<h1>Collector Chain</h1>
			}
			<form
			// onSubmit={handleSubmitForm}
			>
				<input
					placeholder="Search collections & NFT"
					// onChange={handleChange}
					type="text"
					id="searchBar"
					name="searchBar"
					className={isSearchBarOpen?'header__searchBar-open':'header__searchBar'}
				/>
			</form>
			<button onClick={manageSearchBarVisibility}>
				<ion-icon name="search-outline"></ion-icon>
			</button>
		</div>
	);
};

export default Header;
