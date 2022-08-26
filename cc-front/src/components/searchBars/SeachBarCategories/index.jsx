import "../styles.scss";
import { Dropdown } from "@nextui-org/react";
import { Input } from "rsuite";

const SearchBarCategories = () => {
	return (
		<div className="searchBarCategories">
			<form className="searchBarCategories__form">
				<Input type="text" placeholder="Search categories" name="searchCategoriesField" />
			</form>
			<Dropdown>
				<Dropdown.Button flat>Order by</Dropdown.Button>
				<Dropdown.Menu aria-label="Static Actions">
					<Dropdown.Item key="popularityToUp">Popularity low to high</Dropdown.Item>
					<Dropdown.Item key="popularityToDown">Popularity high to low</Dropdown.Item>
					<Dropdown.Item key="priceToUp">Price low to high</Dropdown.Item>
					<Dropdown.Item key="priceToDown">Price high to low</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default SearchBarCategories;
