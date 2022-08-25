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
// import Darkmode from "darkmode-js";
import CreateNewNft1 from "../pages/CreateNewNft1";
import CreateNewNft2 from "../pages/CreateNewNft2";
import Profil from "../pages/Profil";
import Showcase from "../pages/Showcase";
import Favorites from "../pages/Favorites";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Term from "../pages/Term";

function App() {
	//DARK MODE
	// const options = {
	// 	// top: "0px", // default: '32px'
	// 	right: "-8px", // default: '32px'
	// 	// left: "8px", // default: 'unset'
	// 	time: "0.5s", // default: '0.3s'
	// 	mixColor: "#fff", // default: '#fff'
	// 	backgroundColor: "#fff", // default: '#fff'
	// 	buttonColorDark: "transparent", // default: '#100f2c'
	// 	buttonColorLight: "transparent", // default: '#fff'
	// 	saveInCookies: false, // default: true,
	// 	label: "🌓", // default: ''
	// 	autoMatchOsTheme: true, // default: true
	// };
	// const darkmode = new Darkmode(options);
	// darkmode.showWidget();
	// -----------------

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
					<Route path="/profil" element={<Profil />} />
					<Route path="/creation/createnewnft" element={<CreateNewNft1 />} />
					<Route path="/creation/createnewnft2" element={<CreateNewNft2 />} />
					<Route path="/showcase" element={<Showcase />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/term" element={<Term />} />
					<Route path="*" element={<Error />} />
				</Routes>

				<Footer />
				<MenuMobile />
			</NextUIProvider>
		</div>
	);
}

export default App;
