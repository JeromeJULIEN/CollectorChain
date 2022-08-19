import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";
import HomePageCarousselAuto from "../../carousels_slides/CarousselAuto";
import CollectionCard from "../../card/CollectionCard";
import HomePageHightlightCollections from "../../carousels_slides/Slide";

const HomePage = () => {
	// import depuis le state de la liste en cours
	const list = useSelector((state) => state.collections.list);

	return (
		<main>
			<div className="homePage">
				<div className="homePage__ressources">
					<HomePageCarousselAuto />
					<div className="homePage__highlightedCollections">
						<h2>hightlighted collections</h2>
						<HomePageHightlightCollections>
							{list.map((text) => {
								return (
									<SwiperSlide>
										<CollectionCard key={text} text={text} />
									</SwiperSlide>
								);
							})}
						</HomePageHightlightCollections>
					</div>
				</div>

				<div className="homePage__creationProcess">
					<h2>creation process</h2>
				</div>
				<div className="homePage__latestCollections">
					<h2>latest Collections</h2>
					<HomePageHightlightCollections>
						{list.map((text) => {
							return (
								<SwiperSlide>
									<CollectionCard key={text} text={text} />
								</SwiperSlide>
							);
						})}
					</HomePageHightlightCollections>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
