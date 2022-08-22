import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "@nextui-org/react";

const SearchBarResultsCollections = () => {
	// 	const list = useSelector((state) => state.nfts.list);

	// 	const funcPriceLowToHigh = (event) => {
	// 		event.preventDefault();
	// 		const priceLowToHigh = list.sort((a, b) => a.price - b.price);
	// 		console.log(priceLowToHigh);
	// 	};
	// 	const funcPriceHighToLow = (event) => {
	// 		event.preventDefault();
	// 		const PriceHighToLow = list.sort((a, b) => b.price - a.price);
	// 		console.log(PriceHighToLow);
	// 	};

	return (
		<div className="searchBarResultsCollections">
			<form className="searchBarResultsCollections__form">
				<input type="text" placeholder="Search collections by name" name="searchCollectionsField" />
			</form>
			<div className="searchBarResultsCollections__filters">
				<Dropdown>
					<Dropdown.Button flat>Categories</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item key="">Category 1</Dropdown.Item>
						<Dropdown.Item key="">Category 2</Dropdown.Item>
						<Dropdown.Item key="">Category 3</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button flat>Order by</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item key="">Popularity low to high</Dropdown.Item>
						<Dropdown.Item key="">Popularity high to low</Dropdown.Item>
						<Dropdown.Item key="">
							Price low to high
							{/* <p onClick={funcPriceLowToHigh}>Price low to high</p> */}
						</Dropdown.Item>
						<Dropdown.Item key="priceToDown">
							Price high to low
							{/* <p onClick={funcPriceHighToLow}>Price high to low</p> */}
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};

export default SearchBarResultsCollections;
