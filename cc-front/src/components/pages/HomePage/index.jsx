import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";
import SlideAuto from "../../slides/SlideAuto";
import CollectionCard from "../../card/CollectionCard";
import Slide_2x2 from "../../slides/Slide_2x2";

const HomePage = () => {
	// import depuis le state de la liste en cours
	const list = useSelector((state) => state.collections.list);

	return (
		<main>
			<div className="homePage">
				<div className="homePage__ressources">
					<SlideAuto />
					<div className="homePage__highlightedCollections">
						<h2>hightlighted collections</h2>
						<Slide_2x2>
							{list.map((text) => {
								return (
									<SwiperSlide key={text}>
										<CollectionCard text={text} />
									</SwiperSlide>
								);
							})}
						</Slide_2x2>
					</div>
				</div>

				<div className="homePage__creationProcess">
					<h2>creation process</h2>
				</div>
				<div className="homePage__latestCollections">
					<h2>latest Collections</h2>
					<Slide_2x2>
						{list.map((text) => {
							return (
								<SwiperSlide key={text}>
									<CollectionCard text={text} />
								</SwiperSlide>
							);
						})}
					</Slide_2x2>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
