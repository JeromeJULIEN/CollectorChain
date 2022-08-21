import React from "react";
import "./styles.scss";
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import UserInfoIcon from "@rsuite/icons/UserInfo";
import { Link } from "react-router-dom";
import { Modal, Input, Row, Button, Text } from "@nextui-org/react";

import MenuExplore from "./MenuExplore";
import { Mail } from "../modals/Login/Mail";
import { Password } from "../modals/Login/Password";

import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserField, logIn } from "../../../store/actions/user";

const MenuMobile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const email = useSelector((state) => state.user.email);
	const password = useSelector((state) => state.user.password);

	const [loginVisible, loginSetVisible] = React.useState(false);
	const loginHandler = () => {
		loginSetVisible(true);
	};
	const loginCloseHandler = () => {
		loginSetVisible(false);
	};
	const [signupVisible, signupSetVisible] = React.useState(false);
	const signupHandler = () => signupSetVisible(true);
	const signupCloseHandler = () => {
		signupSetVisible(false);
	};

	const handleChange = (event) => {
		dispatch(changeUserField(event.target.value, event.target.name));
	};

	const loginHandleSubmit = (event) => {
		console.log("test submit");
		event.preventDefault();
		dispatch(logIn());
		loginCloseHandler();
		navigate("/");
	};

	const signupHandleSubmit = (event) => {
		event.preventDefault();
		// dispatch(logIn());
		signupCloseHandler();
		navigate("/login");
	};

	return (
		<div className="menu-mobile">
			<Nav className="menu-mobile-nav">
				<MenuExplore className="menu-explore" placement={"topStart"} />
				<Nav.Item>Market</Nav.Item>
				<Nav.Item>Create</Nav.Item>
				<Nav.Menu title="User" className="menu-user" icon={<UserInfoIcon />} placement="topEnd">
					<Nav.Item onClick={loginHandler}>Login</Nav.Item>
					<Nav.Item onClick={signupHandler}>Signup</Nav.Item>
					<Nav.Item>My showcase</Nav.Item>
					<Nav.Item>My favorites</Nav.Item>
					<Nav.Item>My profil</Nav.Item>
					<Nav.Item>Logout</Nav.Item>
				</Nav.Menu>
			</Nav>
			<Modal className="modal-login" closeButton blur open={loginVisible} onClose={loginCloseHandler}>
				<Modal.Header>
					<Text id="modal-login" size={18}>
						Login
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input
						type="email"
						learable
						bordered
						fullWidth
						color="primary"
						size="lg"
						placeholder="Email"
						contentLeft={<Mail fill="currentColor" />}
						name="email"
						value={email}
						onChange={handleChange}
					/>
					<Input
						type="password"
						clearable
						bordered
						fullWidth
						color="primary"
						size="lg"
						placeholder="Password"
						contentLeft={<Password fill="currentColor" />}
						name="password"
						value={password}
						onChange={handleChange}
					/>
					<Row justify="space-between">
						<Text size={14}>Forgot password?</Text>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onClick={loginCloseHandler}>
						Close
					</Button>
					<Button auto onClick={loginHandleSubmit}>
						Sign in
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal className="modal-signup" closeButton blur open={signupVisible} onClose={signupCloseHandler}>
				<Modal.Header>
					<Text id="modal-signup" size={18}>
						Signup
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input type="text" clearable bordered fullWidth color="primary" size="lg" placeholder="Pseudo" />
					<Input type="email" clearable bordered fullWidth color="primary" size="lg" placeholder="Email" contentLeft={<Mail fill="currentColor" />} />
					<Input type="password" clearable bordered fullWidth color="primary" size="lg" placeholder="Password" contentLeft={<Password fill="currentColor" />} />
					<Input type="password" clearable bordered fullWidth color="primary" size="lg" placeholder="Confirm password" contentLeft={<Password fill="currentColor" />} />
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onClick={signupCloseHandler}>
						Close
					</Button>
					<Button auto onClick={signupHandleSubmit}>
						Sign up
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default MenuMobile;
