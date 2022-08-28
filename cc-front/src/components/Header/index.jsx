import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'rsuite';
import './styles.scss'

const Header = () => {
	const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false)

	const manageSearchBarVisibility = (event) => {
		event.preventDefault()
		setIsSearchBarOpen(!isSearchBarOpen)
	}

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
			
			{/* <form
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
			</form> */}
		</div>
	);
};

export default Header;