import { Modal, Input, Button, Text, Spacer } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useDispatch } from "react-redux";
import { updateUserField, updateProfile } from "../../../../store/actions/user";

// import './styles.scss'

const UpdateProfile = ({ hideUpdateProfile }) => {
	const dispatch = useDispatch();

	const handleChange = (event) => {
		dispatch(updateUserField(event.target.value, event.target.name));
	};
	const updateProfileHandleSubmit = (event) => {
		console.log("update profil");
		event.preventDefault();
		dispatch(updateProfile());
		hideUpdateProfile();
	};

	return (
		<div className="modify-profile">
			<Modal.Header>
				<Text id="modal-title" size={18}>
					Profile editor
				</Text>
			</Modal.Header>
			<Modal.Body>
				<Input type="text" clearable bordered fullWidth color="primary" size="lg" placeholder="nickname" name="nickname" onChange={handleChange} />
				<Input type="text" clearable bordered fullWidth color="primary" size="lg" placeholder="name" name="name" onChange={handleChange} />
				<Input type="text" clearable bordered fullWidth color="primary" size="lg" placeholder="firstname" name="firstname" onChange={handleChange} />
				<Spacer y={0.25} />
				<Input type="email" clearable bordered fullWidth color="primary" size="lg" placeholder="email" contentLeft={<Mail fill="currentColor" />} name="email" onChange={handleChange} />
				<Spacer y={0.25} />
				<Input.Password
					type="password"
					clearable
					bordered
					fullWidth
					color="primary"
					size="lg"
					placeholder="New password"
					contentLeft={<Password fill="currentColor" />}
					name="newPassword"
					onChange={handleChange}
				/>
				<Input.Password
					type="password"
					clearable
					bordered
					fullWidth
					color="primary"
					size="lg"
					placeholder="Confirm new password"
					contentLeft={<Password fill="currentColor" />}
					name="confirmNewPassword"
					onChange={handleChange}
				/>
				<Spacer y={0.25} />
				<Input.Password
					type="password"
					clearable
					bordered
					fullWidth
					color="primary"
					size="lg"
					placeholder="Actual password"
					contentLeft={<Password fill="currentColor" />}
					name="password"
					onChange={handleChange}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button auto className="cancel" onClick={hideUpdateProfile}>
					Cancel
				</Button>
				<Button auto onClick={updateProfileHandleSubmit}>
					Update
				</Button>
			</Modal.Footer>
		</div>
	);
};

export default UpdateProfile;
