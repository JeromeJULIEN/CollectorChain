import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Grid, Row, Col } from "rsuite";
import { Modal } from "@nextui-org/react";
import ShowcaseNft from "./ShowcaseNft";
import SearchBarShowcase from "../../searchBars/SearchBarShowcase";
import NftOwned from "../../modals/NftOwned";
import { setShowcaseNftDisplayed } from "../../../../store/actions/user";
// import "./styles.scss";

const Showcase = () => {
	const dispatch = useDispatch();

	const nftOwned = useSelector((state) => state.user.nftOwned);

	const [isModaleNftOwnedVisible, setIsModaleNftOwnedVisible] = useState(false);
	const showModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(true);
	};
	const hideModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(false);
	};

	const [tempNftSelected, setTempNftSelected] = useState([]);

	const uploadImage = (event) => {
		setTempNftSelected((tempNftSelected) => ({
			...tempNftSelected,
			[event.target.name]: nftOwned.find((nft) => (nft = event.target.id)),
		}));
		console.log("TempNftSelected >>>", tempNftSelected);
		dispatch(setShowcaseNftDisplayed(tempNftSelected));
		hideModaleNftOwned();
		// console.log("Event.target >>>", event.target);
	};

	const deleteImage = (event) => {
		// console.log("delete test");
	};

	return (
		<main>
			<div className="showcase__description">
				<h2>My showcase</h2>
				<p>
					Manage the way to display your collection : color theme, collection oraganization, etc...
					{/* Click on ‘preview’ to display the way the others visitors will see your collection  */}
				</p>
			</div>
			<SearchBarShowcase />
			<Grid fluid>
				<Row className="show-grid">
					<Col xs={12} sm={10} md={8}>
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={1} name="nft1" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={2} name="nft2" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={3} name="nft3" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={4} name="nft4" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={5} name="nft5" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={6} name="nft6" />
					</Col>
					<Col xs={12} sm={10} md={8}>
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={7} name="nft7" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={8} name="nft8" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={9} name="nft9" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={10} name="nft10" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={11} name="nft11" />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={12} name="nft13" />
					</Col>
				</Row>
			</Grid>
			<Modal className="modaleNftOwned" closeButton blur open={isModaleNftOwnedVisible} onClose={hideModaleNftOwned}>
				<NftOwned hideNftOwned={hideModaleNftOwned} uploadImage={uploadImage} nftOwned={nftOwned} />
			</Modal>
		</main>
	);
};

export default Showcase;
