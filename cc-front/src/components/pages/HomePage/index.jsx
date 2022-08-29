import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";
import SlideAuto from "../../slides/SlideAuto";
import CollectionCard from "../../card/CollectionCard";
import Slide_2x2 from "../../slides/Slide_2x2";
import { Link } from "react-router-dom";

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
							{list.map((collection) => {
								return (
									<SwiperSlide key={collection.id}>
										<CollectionCard text={collection.name} media={collection.media} id={collection.id}/>
									</SwiperSlide>
								);
							})}
						</Slide_2x2>
					</div>
				</div>

				<div className="homePage__creationProcess">
					<Link to='/creation'>
						<h2>our NFT creation process</h2>
						<img src="https://bladerender.com/media/simple-responsive-slideshow/2.jpg" />
					</Link>
				</div>
				<div className="homePage__latestCollections">
					<h2>latest Collections</h2>
					<Slide_2x2>
						{list.map((collection) => {
							return (
								<SwiperSlide key={collection.id}>
									<CollectionCard text={collection.name} media={collection.media} id={collection.id}/>
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
