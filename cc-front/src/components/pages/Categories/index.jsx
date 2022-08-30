import { useSelector } from "react-redux";
import CategoryCard from "../../card/CategoryCard";
import SearchBarCategories from "../../searchBars/SeachBarCategories";

import "./styles.scss";

const Categories = () => {
	
	const list = useSelector((state) => state.categories.list);

	return (
		<div className="categories">
			<h1>Explore Categories</h1>
			<SearchBarCategories />
			<div className="categories__list">
				{/* display de la liste sous forme de carte */}
				{list.map((category) => {
					return <CategoryCard key={category.id} media={category.media} name={category.name} id={category.id}/>;
				})}
			</div>
		</div>
	);
};

export default Categories;
