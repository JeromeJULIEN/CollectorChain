const Header = () => {
	return (
		<div className="Header">
			<h1>Collector Chain</h1>
			<form
			// onSubmit={handleSubmitForm}
			>
				<input
					placeholder="Search collections & NFT"
					// onChange={handleChange}
					type="text"
					id="searchBar"
					name="searchBar"
				/>
				<ion-icon name="search-outline"></ion-icon>
			</form>
		</div>
	);
};

export default Header;
