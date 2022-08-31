import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeartIcon from "../../dynamicIcons/heart";
import "./styles.scss";

const NftCard = ({ name, id, media }) => {

	const isLogged = useSelector(state => state.user.isLogged)

	const shortedName = name.substring(0,15)
	return (
		<>
			<div className="nftCard">
				<Link to={`/nft/${id}`} className="nftCard">
					<img src={media} alt="" className="nftCard__image" />
				</Link>
				<div className="nftCard__title">
					<div>{shortedName}</div>
					{isLogged? <HeartIcon /> : ''}
				</div>
			</div>
		</>
	);
};

export default NftCard;
