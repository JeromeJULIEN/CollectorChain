import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "semantic-ui-css/semantic.min.css";
import Header from "../Header";
import Footer from "../Footer";
import MenuMobile from "../MenuMobile";
import "./reset.scss";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Categories from "../pages/Categories";
import CollectionsByCategory from "../pages/CollectionsByCategory";
import Collections from "../pages/Collections";
import Collection from "../pages/Collection";
import Error from "../pages/Error";

function App() {
	return (
		<div className="app">
			<NextUIProvider>
				<Header />

					<Routes>
						<Route path="/" element={<HomePage />}/>
						<Route path="/categories" element={<Categories />}/>
						<Route path="/category/collections" element={<CollectionsByCategory />}/>
						<Route path="/collections" element={<Collections />}/>
						<Route path="/collection/id" element={<Collection />}/>
						<Route path="*" element={<Error />}/>
					</Routes>

				<Footer />
				<MenuMobile />
			</NextUIProvider>
		</div>
	);
}

export default App;
