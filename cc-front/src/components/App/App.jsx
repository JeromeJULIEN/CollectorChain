import { useState } from "react";
import Header from "../Header";
import HomePage from "../HomePage";
import Footer from "../Footer";
import MenuMobile from "../MenuMobile";
import "./reset.scss";
import "./styles.scss";
import {Routes, Route} from "react-router-dom";

function App() {
	
	return (
		<div className="App">
			<Header />
				<Routes>
					<Route path="/" element={<HomePage />}/>
				</Routes>
			<Footer />
			<MenuMobile />
		</div>
	);
}

export default App;
