import React from "react";
import { Dropdown } from "@nextui-org/react";
import "./style.scss";

export default function MenuExplore() {
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
	};

	return (
		<>
			<Dropdown>
				<Dropdown.Button rounded className="menu-explore">
					Explore
				</Dropdown.Button>
				<Dropdown.Menu color="secondary" aria-label="Actions">
					<Dropdown.Item>Categories</Dropdown.Item>
					<Dropdown.Item>Collections</Dropdown.Item>
					<Dropdown.Item withDivider>Ressources</Dropdown.Item>
					<Dropdown.Item>Events</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
}
