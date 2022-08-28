import { Link } from "react-router-dom";
import HeartIcon from "../../dynamicIcons/heart";
import "./styles.scss";

const NftCard = ({ name, id, media }) => {
	return (
		<>
			<div className="nftCard">
				<Link to={`/nft/${id}`} className="nftCard">
					<img src={media} alt="" className="nftCard__image" />
				</Link>
				<div className="nftCard__title">
					<div>{name}</div>
					<HeartIcon />
				</div>
			</div>
		</>
	);
};

export default NftCard;
