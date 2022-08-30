import { Link } from "react-router-dom";
import "./styles.scss";

const CollectionCard = ({ media, text, id }) => {
	return (
		<Link to={`/collection/${id}`} className="collectionCard">
			<img className="collectionCard__image" src={media} alt={text} />
			<div className="collectionCard__title">{text}</div>
		</Link>
	);
};

export default CollectionCard;
