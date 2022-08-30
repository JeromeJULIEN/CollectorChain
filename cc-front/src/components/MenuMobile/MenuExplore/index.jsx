import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import ExploreIcon from "@rsuite/icons/Explore";

export default function MenuExplore({ placement }) {
	return (
		<Nav.Menu
			title="Explore"
			// icon={<ExploreIcon />}
			placement={placement}
		>
			<Nav.Item>
				<Link to="/">Home page</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/categories">Categories</Link>
			</Nav.Item>
			{/* <Nav.Menu title="Categories">
				<Nav.Item>Chat</Nav.Item>
				<Nav.Item>Montre</Nav.Item>
				<Nav.Item>
					<Link to="/categories">...Show all</Link>
				</Nav.Item>
			</Nav.Menu> */}
			<Nav.Item>
				<Link to="/collections">Collections</Link>
			</Nav.Item>
			{/* <Nav.Menu title="Collections">
				<Nav.Item>Top 10</Nav.Item>
				<Nav.Item>Popular</Nav.Item>
				<Nav.Item>
					<Link to="/collections">...Show all</Link>
				</Nav.Item>
			</Nav.Menu> */}
			<Nav.Menu title="Resources" openDirection="end">
				{/* une fonction a faire serrait de gérer l'ouverture du bon panel coté 'resource' en fonction du lien cliqué */}
				<Nav.Item>
					<Link to="/resources">Blockchain and NFT</Link>{" "}
				</Nav.Item>
				<Nav.Item>
					<Link to="/resources">Enjoy showcase</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/resources">Earn passive incomes</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/creation">Creation process</Link>
				</Nav.Item>
			</Nav.Menu>
			<Nav.Item>
				<Link to="/events">Events</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/aboutus">About us</Link>
			</Nav.Item>
		</Nav.Menu>
	);
}
