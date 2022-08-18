import "./styles.scss";

const HomePage = () => {
	return (
		<main>
			<div className="homePage">
				<div className="homePage__ressources">
					<h2>Bring your colelctors to digital word and digital economy</h2>
				</div>
				<div className="homePage__highlightedCollections">
					<h2>hightlighted collections</h2>
					<div className="homePage__highlightedCollections__list">
						<div>collection 1</div>
						<div>collection 2</div>
						<div>collection 3</div>
						<div>collection 4</div>
					</div>
				</div>
				<div className="homePage__creationProcess">
					<h2>creation process</h2> 
					</div>
				<div className="homePage__latestCollections">
					<h2>latest Collections</h2> 
					<div className="homePage__latestCollections__list">
						<div>collection 1</div>
						<div>collection 2</div>
						<div>collection 3</div>
						<div>collection 4</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
