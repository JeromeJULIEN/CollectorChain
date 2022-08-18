import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "../Header";
import HomePage from "../HomePage";
import Footer from "../Footer";
import MenuMobile from "../MenuMobile";
import "./reset.scss";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<NextUIProvider>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
				<Footer />
				<MenuMobile />
			</NextUIProvider>
		</div>
	);
}

export default App;
