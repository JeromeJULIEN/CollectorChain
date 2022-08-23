import { Container, Card, Text, Col, Input, User, Spacer, Button, Grid, Image } from "@nextui-org/react";
import { useSelector } from "react-redux";
import "./styles.scss";

const Profil = () => {
	const user = useSelector((state) => state.user);
	const changeProfilePic = () => {
		console.log(user);
	};

	return (
		<main>
			<div className="profile">
				<div className="profile__pic">
					<Spacer />
					<User src={user.media} name="" size="xl" />
					<p>Level 1</p>
					<button className="profile__button" onClick={changeProfilePic}>
						Modify profile pic
					</button>
				</div>
				<div className="profile__infos">
					<Spacer y={0.5} />
					<Container gap={0}>
						<Card variant="bordered" css={{ $$cardColor: "transparent" }}>
							<Card.Body>
								<Text>Name</Text>
							</Card.Body>
						</Card>
						<Spacer y={1} />
						<Card variant="bordered" css={{ $$cardColor: "transparent" }}>
							<Card.Body>
								<Text>Firstname</Text>
							</Card.Body>
						</Card>
						<Spacer y={1} />
						<Card variant="bordered" css={{ $$cardColor: "transparent" }}>
							<Card.Body>
								<Text>Email</Text>
							</Card.Body>
						</Card>
						<Spacer y={1} />
						<Card variant="bordered" css={{ $$cardColor: "transparent" }}>
							<Card.Body>
								<Text>Password</Text>
							</Card.Body>
						</Card>
					</Container>
					<Spacer y={0.5} />
					<button className="profile__button" light color="primary" auto>
						Modify profile informations
					</button>
				</div>
				<div className="profile__id">
					<h2>Add your ID to create NFT</h2>
					<Image width={320} height={180} src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true" alt="Default Image" objectFit="cover" />
					<Spacer y={1} />
					<Button disabled>Add ID</Button>
				</div>
			</div>
		</main>
	);
};

export default Profil;
