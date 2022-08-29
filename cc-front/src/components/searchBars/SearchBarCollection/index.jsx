import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Input, InputPicker } from "rsuite";

const SearchBarCollection = () => {
	 // import des données des catégories pour alimenter les inputPicker
	 const dataProperties = useSelector(state => state.properties.list).map(item => ({label: item, value: item }));
	 const dataTags = useSelector(state => state.tags.list).map(item => ({label: item, value: item }));


	return (
		<div className="searchBarFavorite">
			<form className="searchBarFavorite__form">
				<Input type="text" placeholder="Search NFT by property or tag" name="searchNFTField" />
			</form>
			<div className="searchBarFavorite__filters">
				<InputPicker data={dataProperties} placeholder='Properties'/>
				<InputPicker data={dataTags} placeholder='Tags'/>
				<Dropdown title="Order by" placement="bottomEnd">
					<Dropdown.Item>Popularity low to high</Dropdown.Item>
					<Dropdown.Item>Popularity high to low</Dropdown.Item>
					<Dropdown.Item>Download As...</Dropdown.Item>
					<Dropdown.Item>Price low to high</Dropdown.Item>
					<Dropdown.Item>Price high to low</Dropdown.Item>
				</Dropdown>
				
			</div>
		</div>
	);
};

export default SearchBarCollection;
