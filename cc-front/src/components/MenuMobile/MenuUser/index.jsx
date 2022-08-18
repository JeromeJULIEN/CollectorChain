import React from "react";
import { Dropdown, Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "../../modals/Login/Mail";
import { Password } from "../../modals/Login/Password";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeUserField, logIn } from "../../../../store/actions/user";

export default function MenuUser() {

	const dispatch = useDispatch();

	const email = useSelector(state => state.user.email)
	const password = useSelector(state => state.user.password)

	const [loginVisible, loginSetVisible] = React.useState(false);
	const loginHandler = () => {
		console.log("test");
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

	const handleChange = event => {
		dispatch(changeUserField(event.target.value,event.target.name))
	}

	const handleSubmit = event => {
		event.preventDefault()
		dispatch(logIn())
		// signupCloseHandler()

	}

	return (
		<>
			<Dropdown>
				<Dropdown.Button rounded className="menu-user">
					<ion-icon className="user-icon" name="person-outline"></ion-icon>
				</Dropdown.Button>
				<Dropdown.Menu color="secondary" aria-label="Actions">
					<Dropdown.Item>
						<button onClick={loginHandler}>Login</button>
					</Dropdown.Item>
					<Dropdown.Item>
						<button onClick={signupHandler}>Signup</button>
					</Dropdown.Item>
					<Dropdown.Item withDivider>My showcase</Dropdown.Item>
					<Dropdown.Item>My favorites</Dropdown.Item>
					<Dropdown.Item>My profil</Dropdown.Item>
					<Dropdown.Item withDivider>Logout</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Modal className="modal-login" closeButton blur open={loginVisible} onClose={loginCloseHandler}>
				<Modal.Header>
					<Text id="modal-login" size={18}>
						Login
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input 
						type="email" 
						learable bordered fullWidth color="primary" 
						size="lg" 
						placeholder="Email" 
						contentLeft={<Mail fill="currentColor" />} 
						name='email'
						value={email}
						onChange={handleChange}
					/>
					<Input 
						type="password" 
						clearable bordered fullWidth color="primary" 
						size="lg" 
						placeholder="Password" 
						contentLeft={<Password fill="currentColor" />} 
						name='password'
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
					<Button auto onClick={handleSubmit}>
						Sign in
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal closeButton blur open={signupVisible} onClose={signupCloseHandler}>
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
					<Button auto onClick={signupCloseHandler}>
						Sign up
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
