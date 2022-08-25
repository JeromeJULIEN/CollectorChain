import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "@nextui-org/react";
import { Input, InputPicker } from "rsuite";

const SearchBarFavorites = () => {

	 // import des données des catégories pour alimenter les inputPicker
	 const dataCategories = useSelector(state => state.categories.list).map(item => ({label: item, value: item }));
	 const dataCollections = useSelector(state => state.collections.list).map(item => ({label: item, value: item }));


	return (
		<div className="searchBarFavorites">
			<form className="searchBarFavorites__form">
				<Input type="text" placeholder="Search NFT by property or tag" name="searchNFTField" />
			</form>
			<div className="searchBarFavorites__filters">
				<InputPicker data={dataCategories} placeholder='Filter categories'/>
				<InputPicker data={dataCollections} placeholder='Filter collections'/>
				<Dropdown>
					<Dropdown.Button flat>Order by</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item key="popularityToUp">Popularity low to high</Dropdown.Item>
						<Dropdown.Item key="popularityToDown">Popularity high to low</Dropdown.Item>
						<Dropdown.Item key="priceToUp">
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

export default SearchBarFavorites;
