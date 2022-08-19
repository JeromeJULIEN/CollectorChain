import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import "./style.scss";

export default function MenuExplore({ placement }) {
	return (
		<Nav.Menu title="Explore" placement={placement}>
			<Nav.Menu title="Categories">
				<Nav.Item>Chat</Nav.Item>
				<Nav.Item>Montre</Nav.Item>
				<Nav.Item><Link to='/categories'>...Show all</Link></Nav.Item>
			</Nav.Menu>
			<Nav.Menu title="Collections">
				<Nav.Item>Top 10</Nav.Item>
				<Nav.Item>Popular</Nav.Item>
				<Nav.Item><Link to='/collections'>...Show all</Link></Nav.Item>
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
