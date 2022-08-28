import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const NftCard = ({ name, id, media }) => {
	const [heartFilled, isHeartFilled] = useState(false);

	const fillIcon = () => {
		isHeartFilled(!heartFilled);
	};

	return (
		<>
			<div className="nftCard">
				<Link to={`/nft/${id}`} className="nftCard">
					<img src={media} alt="" className="nftCard__image" />
				</Link>
				<div className="nftCard__title">
					<div>{name}</div>
					<div>
						{heartFilled === false ? (
							<ion-icon onClick={fillIcon} style={{ color: "red" }} name="heart-outline"></ion-icon>
						) : (
							<ion-icon onClick={fillIcon} style={{ color: "red" }} name="heart"></ion-icon>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default NftCard;
