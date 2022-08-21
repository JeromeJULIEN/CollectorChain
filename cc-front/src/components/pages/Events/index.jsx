import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import SearchBarEvents from "../../searchBars/SearchBarEvents";
import "./styles.scss";

const Events = () => {
	// // import depuis le state de la liste en cours
	// const list = useSelector((state) => state.collections.list);
	const center = [37.7749, -122.4194];
	const zoom = 13;

	return (
		<main>
			<div className="events">
				<div className="events__title">
					<h1>Events</h1>
				</div>
				<div className="events__searchBar">
					<SearchBarEvents />
				</div>
				<MapContainer center={[48.112490724339, -1.6795174922733247]} zoom={11} scrollWheelZoom={false}>
					<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Marker position={[48.112490724339, -1.6795174922733247]}>
						<Popup>
							NFT Meeting <br /> Collectors event
						</Popup>
					</Marker>
				</MapContainer>
				<div className="events__list">
					<h2>List</h2>
				</div>
			</div>
		</main>
	);
};

export default Events;
