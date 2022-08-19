import { Carousel } from "rsuite";
import "./styles.scss";

const HomePageCarousselAuto = () => {
	return (
		<div className="carousel">
			<div className="carousel-title">
				<h2>Bring your colelctors to digital word and digital economy</h2>
				<p>Collector Chain allow you to extend your physical collection to the digital world.</p>
			</div>
			<Carousel autoplay className="custom-slider">
				<div className="carousel-img" style={{ backgroundColor: "red" }}>
					<h2>Based on blockchain and NFT techno</h2>
					<img src="https://via.placeholder.com/8f8e94/FFFFFF?text=1" height="" />
				</div>
				<div className="carousel-img" style={{ backgroundColor: "lightblue" }}>
					<h2>Enjoy your digital showcase</h2>
					<img src="https://via.placeholder.com/8f8e94/FFFFFF?text=2" height="250" />
				</div>
				<div className="carousel-img" style={{ backgroundColor: "lightgreen" }}>
					<h2>Earn passive incomes</h2>
					<img src="https://via.placeholder.com/8f8e94/FFFFFF?text=3" height="250" />
				</div>
			</Carousel>
		</div>
	);
};

export default HomePageCarousselAuto;
