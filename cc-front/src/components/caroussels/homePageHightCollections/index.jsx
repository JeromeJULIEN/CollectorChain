import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.scss";

import CollectionCard from "../../card/CollectionCard";

const HomePageHightlightCollections = ({ children }) => {
	const list = useSelector((state) => state.collections.list);
	return (
		<>
			<div className="slide-collections">
				<Swiper
					slidesPerView={2.16}
					grid={{
						rows: 2,
					}}
					spaceBetween={8}
					pagination={{
						clickable: true,
					}}
					modules={[Grid, Pagination]}
					className="mySwiper"
				>
					{children}
				</Swiper>
			</div>
		</>
	);
};

export default HomePageHightlightCollections;
