import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "../Header";
import Footer from "../Footer";
import MenuMobile from "../MenuMobile";
import "./reset.scss";
import "./styles.scss";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Categories from "../pages/Categories";
import CollectionsByCategory from "../pages/CollectionsByCategory";

function App() {
	return (
		<div className="app">
			<NextUIProvider>
				<Header />
					<Routes>
						<Route path="/" element={<HomePage />}/>
						<Route path="/categories" element={<Categories />}/>
						<Route path="/category/collections" element={<CollectionsByCategory />}/>
					</Routes>
				<Footer />
				<MenuMobile />
			</NextUIProvider>
		</div>
	);
}

export default App;
