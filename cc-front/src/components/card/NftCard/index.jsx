import { Link } from "react-router-dom";
import "./styles.scss";

const NftCard = ({ text, price }) => {
	return (
		<Link to="/nft/id" className="nftCard">
			<div>{text}</div>
			<div>{price}</div>
		</Link>
	);
};

export default NftCard;
