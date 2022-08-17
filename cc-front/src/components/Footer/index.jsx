import "./styles.scss";
import {useDispatch} from 'react-redux';
import { signIn } from "../../../store/actions/user";

const Footer = () => {

	// code temporaire pour test fonction login
	const dispatch = useDispatch()

	const handleLogin = () => {
		dispatch(signIn())
	}

	return (
		<div className="footer">
			<div className="footer__menu">
				<p>About us</p>
				<p>Term</p>
				<p>Contact</p>
				{/* button login de test de la fonction login. A enlever */}
				<button type="button" onClick={handleLogin}>Login</button>
			</div>
			<div className="footer__copyright">Collector Chain @2022</div>
		</div>
	);
};

export default Footer;
