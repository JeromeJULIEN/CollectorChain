import Footer from "../Footer";
import Header from "../Header";
import "./styles.scss";

const HomePage = () => {
	return (
		<main>
			<div className="homePage">
				<div className="homePage__ressources">homePage ressources</div>
				<div className="homePage__highlightedCollections">
					<h2>hightlighted collections</h2>
					<div className="homePage__highlightedCollections__list">
						<div>collection 1</div>
						<div>collection 2</div>
						<div>collection 3</div>
						<div>collection 4</div>
					</div>
				</div>
				<div className="homePage__creationProcess">creation process</div>
				<div className="homePage__latestNFT">latest NFT</div>
			</div>
		</main>
	);
};

export default HomePage;
