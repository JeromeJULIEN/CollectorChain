import React from "react";
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import "./style.scss";

export default function MenuExplore() {
	return (
		<Nav.Menu title="Explore" placement="topStart">
			<Nav.Menu title="Categories">
				<Nav.Item>Chat</Nav.Item>
				<Nav.Item>Montre</Nav.Item>
				<Nav.Item>...Show all</Nav.Item>
			</Nav.Menu>
			<Nav.Menu title="Collections">
				<Nav.Item>Top 10</Nav.Item>
				<Nav.Item>Popular</Nav.Item>
				<Nav.Item>...Show all</Nav.Item>
			</Nav.Menu>
			<Nav.Menu title="Ressources">
				<Nav.Item>Enjoy showcase</Nav.Item>
				<Nav.Item>Earn passive incomes</Nav.Item>
				<Nav.Item>Creation process</Nav.Item>
			</Nav.Menu>
			<Nav.Item>Events</Nav.Item>
		</Nav.Menu>
	);
}
