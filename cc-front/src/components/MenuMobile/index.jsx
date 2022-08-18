import "./styles.scss";
import { Link } from "react-router-dom";
import MenuUser from "./MenuUser";
import MenuExplore from "./MenuExplore";

const MenuMobile = () => {
	return (
		<div className="MenuMobile">
			<MenuExplore />
			{/* <Link to="/explore">Explore</Link> */}
			<p>Market</p>
			<Link to="/creation">Create</Link>
			<MenuUser />
		</div>
	);
};

export default MenuMobile;
