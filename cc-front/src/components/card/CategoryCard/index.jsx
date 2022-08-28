import { Link } from "react-router-dom";
import "./styles.scss";

const CategoryCard = ({ text }) => {
	return (
		<Link to="/category/collections" className="categoryCard">
			<div>
				<img src={text}></img>
			</div>
		</Link>
	);
};

export default CategoryCard;
