import React from "react";
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import UserInfoIcon from "@rsuite/icons/UserInfo";
import "./styles.scss";

const SearchBarEvents = () => {
	return (
		<Nav className="events__searchbar">
			<Nav.Menu title="Event type" placement="bottomStart">
				<Nav.Item>Physic</Nav.Item>
				<Nav.Item>Virtual</Nav.Item>
			</Nav.Menu>
			<Nav.Menu title="Country" placement="bottomStart">
				<Nav.Item>Test 1</Nav.Item>
				<Nav.Item>test 2</Nav.Item>
			</Nav.Menu>
			<Nav.Menu title="City" placement="bottomEnd">
				<Nav.Item>Test 1</Nav.Item>
				<Nav.Item>test 2</Nav.Item>
			</Nav.Menu>
		</Nav>
	);
};

export default SearchBarEvents;
