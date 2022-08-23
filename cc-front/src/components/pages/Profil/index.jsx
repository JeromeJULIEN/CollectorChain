import { Container, Card, Text, Col, Input, User, Spacer, Button, Image, Switch } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "@nextui-org/react";
import UpdateProfile from "../../modals/UpdateProfile";
import "./styles.scss";

const Profil = () => {
	const user = useSelector((state) => state.user);
	const changeProfilePic = () => {
		console.log(user);
	};

	const [isUpdateProfileVisible, setIsUpdateProfileVisible] = useState(false);
	const showUpdateProfile = () => {
		setIsUpdateProfileVisible(true);
	};
	const hideUpdateProfile = () => {
		setIsUpdateProfileVisible(false);
	};

	return (
		<main>
			<div className="profile">
				<div className="profile__pic">
					<Spacer />
					<User src={user.media} name="" size="xxl" />
					<h3>Level 1</h3>
					<button className="profile__button" onClick={changeProfilePic}>
						Modify profile pic
					</button>
				</div>
				<div className="profile__infos">
					<Spacer y={0.5} />
					<Input disabled={true} label="Pseudo" placeholder={user.pseudo} />
					<Spacer y={0.5} />
					<Input disabled={true} label="Name" placeholder={user.name} />
					<Spacer y={0.5} />
					<Input disabled={true} label="Firstname" placeholder={user.firstname} />
					<Spacer y={0.5} />
					<Input disabled={true} label="Email" placeholder={user.email} />
					<Spacer y={0.5} />
					<button className="profile__button" color="primary" auto onClick={showUpdateProfile}>
						Update profile informations
					</button>
				</div>
				<div className="profile__id">
					<Spacer y={1} />
					<h2>Add your ID to create NFT</h2>
					<Image width={320} height={180} src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true" alt="Default Image" objectFit="cover" />
					<Spacer y={1} />
					<Button>Add ID</Button>
				</div>
				<Spacer y={1} />
				<div className="profile__link">
					<Link to="/showcase" className="link">
						access my collection
					</Link>
					<Link to="" className="link">
						access my contact
					</Link>
				</div>
				<div className="profile__preferency">
					<Switch color="primary" size="sm" />
					<p>Contact preferency</p>
				</div>
				<Spacer y={1.5} />
				<div className="profile__helper">
					<h3 className="profile__helper-n0">Level 0</h3>
					<Spacer y={0.5} />
					<p>Permet à l’utilisateur de visiter le site et de pouvoir acheter et vendre des NFT</p>
					<Spacer y={1} />
					<h3 className="profile__helper-n1">Level 1</h3>
					<Spacer y={0.5} />
					<p>Permet à l’utilisateur de créer des NFT en renseignant son nom et prénom ainsi qu’un justificatif d’identité</p>
				</div>
				<Spacer y={0.5} />
			</div>
			<Modal className="modaleUpdateProfile" closeButton blur open={isUpdateProfileVisible} onClose={hideUpdateProfile}>
				<UpdateProfile hideUpdateProfile={hideUpdateProfile} />
			</Modal>
		</main>
	);
};

export default Profil;
