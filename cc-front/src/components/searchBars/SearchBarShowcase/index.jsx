import { AutoComplete, InputGroup } from "rsuite";
import { Dropdown } from "@nextui-org/react";
import SearchIcon from "@rsuite/icons/Search";
import "./styles.scss";

const SearchBarShowcase = () => {
	return (
		<div className="searchBarShowcase">
			<form className="searchBarShowcase__form">
				<InputGroup inside>
					{/* <AutoComplete data={data} /> */}
					<AutoComplete placeholder="Search by property or tag" />
					<InputGroup.Addon>
						<SearchIcon />
					</InputGroup.Addon>
				</InputGroup>
			</form>
			<div className="searchBarShowcase__filters">
				<Dropdown>
					<Dropdown.Button flat>Categories</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item key="cat1">Category 1</Dropdown.Item>
						<Dropdown.Item key="cat2">Category 2</Dropdown.Item>
						<Dropdown.Item key="cat3">Category 3</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button flat>Order by</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item key="priceToHigh">
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

export default SearchBarShowcase;
