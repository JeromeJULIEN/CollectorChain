import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "../Header";
import HomePage from "../HomePage";
import Footer from "../Footer";
import MenuMobile from "../MenuMobile";
import "./reset.scss";
import "./styles.scss";

function App() {
	return (
		<div className="App">
			<NextUIProvider>
				<Header />
				<HomePage />
				<Footer />
				<MenuMobile />
			</NextUIProvider>
		</div>
	);
}

export default App;
