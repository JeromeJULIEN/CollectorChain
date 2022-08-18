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

function App() {
	return (
		<div className="App">
			<NextUIProvider>
				<Header />
					<Routes>
						<Route path="/" element={<HomePage />}/>
						<Route path="/categories" element={<Categories />}/>
					</Routes>
				<Footer />
				<MenuMobile />
			</NextUIProvider>
		</div>
	);
}

export default App;
