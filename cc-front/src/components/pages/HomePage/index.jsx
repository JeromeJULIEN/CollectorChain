import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import HomePageCarousselAuto from "../../caroussels/homePageCarousselAuto";
import { Carousel } from "rsuite";
import CollectionCard from "../../card/CollectionCard";

const HomePage = () => {

// import depuis le state de la liste en cours
const list=useSelector(state => state.collections.list)



	return (
		<main>
			<div className="homePage">
				<div className="homePage__ressources">
					<HomePageCarousselAuto />
				</div>
				<div className="homePage__highlightedCollections">
					<h2>hightlighted collections</h2>

					<Carousel className="custom-slider">
						<div className="homePage__highlightedCollections__list">
							{/* display de la liste sous forme de carte */}
							{list.map((text) => {
								return <CollectionCard key={text} text={text} />;
							})}
						</div>

						{/* DIV COPIE POUR ESSAI */}
						<div className="homePage__highlightedCollections__list">
							{/* display de la liste sous forme de carte */}
							{list.map((text) => {
								return <CollectionCard key={text} text={text} />;
							})}
						</div>
					</Carousel>

				</div>
				<div className="homePage__creationProcess">
					<h2>creation process</h2>
				</div>
				<div className="homePage__latestCollections">
					<h2>latest Collections</h2>
					<Carousel className="custom-slider">
						<div className="homePage__latestCollections__list">
							{list.map((text) => {
								return (
									<CollectionCard key={text} text={text}/>
								)
							})}
						</div>
					</Carousel>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
