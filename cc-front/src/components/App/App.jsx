import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "semantic-ui-css/semantic.min.css";
import Header from "../Header";
import Footer from "../Footer";
import MenuMobile from "../MenuMobile";
import "./reset.scss";
import "./styles.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Categories from "../pages/Categories";
import CollectionsByCategory from "../pages/CollectionsByCategory";
import Collections from "../pages/Collections";
import Collection from "../pages/Collection";
import Error from "../pages/Error";
import { useEffect } from "react";
import Nft from "../pages/nft";
import Events from "../pages/Events";
import { useSelector } from "react-redux";
import Results from "../pages/Results";
import CreateNewNft1 from "../pages/CreateNewNft1";

function App() {
	// fonction pou remonter en haut de l apage automatiquement à chaque changement d'url
	// 1 - on recupère l'url
	const location = useLocation();
	// 2 - on lance l'action à chaque changement d'url
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	// récupération des nfts en cours d'affichage pour les envoyer a la page nft
	const nfts = useSelector((state) => state.nfts.list);

	return (
		<div className="app">
			<NextUIProvider>
				<Header />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/category/collections" element={<CollectionsByCategory />} />
					<Route path="/collections" element={<Collections />} />
					<Route path="/collection/:id" element={<Collection />} />
					<Route path="/nft/:id" element={<Nft nfts={nfts} />} />
					<Route path="/events" element={<Events />} />
					<Route path="/results" element={<Results />} />
					<Route path="/creation/createnewnft" element={<CreateNewNft1 />} />
					<Route path="*" element={<Error />} />
				</Routes>

				<Footer />
				<MenuMobile />
			</NextUIProvider>
		</div>
	);
}

export default App;
