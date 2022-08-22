import React from "react";
import axios from "axios";
import { AutoComplete, Nav, InputGroup } from "rsuite/";
import SearchIcon from "@rsuite/icons/Search";
import "rsuite/dist/rsuite.min.css";
import "./styles.scss";
import { useEffect } from "react";

const SearchBarEvents = () => {
	const [inputValue, setInputValue] = React.useState("");
	const [data, setData] = React.useState([]);
	const [locationIdValue, setLocationIdValue] = React.useState();

	const handleInputValue = (inputValue) => {
		setInputValue(inputValue);
		getCity(inputValue);
	};
	// Récupère une liste des 5 premières villes selon la valeur de l'input
	const getCity = async (inputValue) => {
		const API_KEY = "vPSloYvPzzuv5yWjKL5w6AfBh0xpAI-ODXwRqLhjEsI";
		const ACCESS_kEY_ID = "P4zIeA84EjnSKbTPkSL64Q";
		try {
			const response = await axios.get(
				`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json
				?query=${inputValue}
				&apiKey=${API_KEY}
				&app_id=${ACCESS_kEY_ID}`,
			);
			setData(response.data.suggestions);
		} catch (error) {
			console.error(error);
		}
	};
	console.log("VALUE >>>", inputValue);

	// Récupère la ville sélectionnée pour l'afficher dans l'input
	const dataPicker = data.map((item) => ({ label: item.label, value: item.label, locationId: item.locationId }));
	console.log(dataPicker);
	// // Récupère la location ID de la ville sélectionnée
	// const locationId = dataPicker.find((item) => item.locationId);
	// setLocationIdValue(locationId);
	// console.log("TEST", locationIdValue);

	return (
		<>
			<Nav className="events__searchbar">
				<Nav.Menu title="Event type" placement="bottomStart">
					<Nav.Item>Physic</Nav.Item>
					<Nav.Item>Virtual</Nav.Item>
				</Nav.Menu>
			</Nav>
			<InputGroup>
				<AutoComplete placeholder="search location" data={dataPicker} value={inputValue} onChange={handleInputValue} />
				<InputGroup.Button tabIndex={-1}>
					<SearchIcon />
				</InputGroup.Button>
			</InputGroup>
		</>
	);
};

export default SearchBarEvents;
