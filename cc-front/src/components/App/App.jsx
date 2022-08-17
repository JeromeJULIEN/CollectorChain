import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import Header from "../Header";
import HomePage from "../HomePage";
import Footer from "../Footer";
import MenuMobile from "../MenuMobile";
import "./reset.scss";
import "./styles.scss";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Header />
			<HomePage />
			<Footer />
			<MenuMobile />
		</div>
	);
}

export default App;
