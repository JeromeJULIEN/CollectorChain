import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Grid, Row, Col } from "rsuite";
import { Modal } from "@nextui-org/react";
import ShowcaseNft from "./ShowcaseNft";
import SearchBarShowcase from "../../searchBars/SearchBarShowcase";
import NftOwned from "../../modals/NftOwned";
import { setShowcaseNftDisplayed } from "../../../../store/actions/user";
import { useEffect } from "react";
import SearchBarFavorites from "../../searchBars/SearchBarFavorites";
// import "./styles.scss";

const Showcase = () => {
	const dispatch = useDispatch();

	const nftOwned = useSelector((state) => state.user.nftOwned);

	const nftDisplayed = useSelector((state) => state.user.showcaseNftDisplayed);

	const [isModaleNftOwnedVisible, setIsModaleNftOwnedVisible] = useState(false);
	const showModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(true);
	};
	const hideModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(false);
	};

	const [tempNftSelected, setTempNftSelected] = useState([]);
	const [lastNftSelected, setLastNftSelected] = useState({});

	const uploadImage = (event) => {
		// console.log("tempNFTbefore>>", tempNftSelected);
		setTempNftSelected((tempNftSelected) => ({
			...tempNftSelected,
			[event.target.name]: nftOwned.find((nft) => (nft = event.target.id))
		}));
		setLastNftSelected(event.target.src);
		hideModaleNftOwned();
	};
	
	useEffect(() => {
		console.log("TempNftSelected after>>>", tempNftSelected);
		dispatch(setShowcaseNftDisplayed(tempNftSelected))
	},[tempNftSelected])

	useEffect(() => {
		// console.log("TempNftSelected after>>>", tempNftSelected);
		dispatch(setShowcaseNftDisplayed(tempNftSelected));
		console.log("Last nft selected >>>", lastNftSelected);
	}, [tempNftSelected]);

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
			<SearchBarFavorites/>
			<Grid fluid>
				<Row className="show-grid">
					<Col xs={12} sm={10} md={8}>
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={1} name="nft1" lastNftSelected={lastNftSelected} />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={2} name="nft2" lastNftSelected={lastNftSelected} />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={3} name="nft3" lastNftSelected={lastNftSelected} />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={4} name="nft4" lastNftSelected={lastNftSelected} />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={5} name="nft5" lastNftSelected={lastNftSelected} />
						<ShowcaseNft deleteImage={deleteImage} showModaleNftOwned={showModaleNftOwned} id={6} name="nft6" lastNftSelected={lastNftSelected} />
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
