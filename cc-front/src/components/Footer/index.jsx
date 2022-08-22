import "./styles.scss";
import { useDispatch } from "react-redux";
import { logIn } from "../../../store/actions/user";

const Footer = () => {
	// code temporaire pour test fonction login
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(logIn());
	};

	return (
		<div className="footer">
			<div className="footer__menu">
				<p>About us</p>
				<p>Term</p>
				<p>Contact</p>
			</div>
			<div className="footer__copyright">Collector Chain @2022</div>
		</div>
	);
};

export default Footer;
