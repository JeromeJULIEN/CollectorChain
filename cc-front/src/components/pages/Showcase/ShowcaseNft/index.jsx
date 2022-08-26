import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "rsuite";
import { setShowcaseNftDisplayed } from "../../../../../store/actions/user";
import NftOwned from "../../../modals/NftOwned";
import "./styles.scss";

const ShowcaseNft = ({id, name}) => {

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
		// console.log("TempNftSelected after>>>", tempNftSelected);
		dispatch(setShowcaseNftDisplayed(tempNftSelected))
	},[tempNftSelected])

	useEffect(() => {
		// console.log("TempNftSelected after>>>", tempNftSelected);
		dispatch(setShowcaseNftDisplayed(tempNftSelected));
		// console.log("Last nft selected >>>", lastNftSelected);
	}, [tempNftSelected]);

	const deleteImage = (event) => {
		// console.log("delete test");
	};
	return (
		<div className="showcase">
			<div className="showcase__pic">
				{/* {user.media ? ( */}
				<div className="showcase__pic-trash-icon" onClick={deleteImage}>
					<ion-icon className="showcase__pic-trash" name="trash-outline" id={id} size="large"></ion-icon>
				</div>
				{/* ) : (
						""
					)} */}
				{/* {!user.media ? ( */}
				{/* <> */}
				<div className="showcase__pic-add-icon" onClick={showModaleNftOwned}>
					<ion-icon name="add-circle-outline" size="large" id={name}></ion-icon>
				</div>
				{/* </> */}
				{/* ) : (
						""
					)} */}
				<img src={lastNftSelected} className="showcase__pic-img" alt="" />
			</div>
			<Modal 
				className="modaleNftOwned" 
				closeButton 
				blur 
				open={isModaleNftOwnedVisible} 
				onClose={hideModaleNftOwned}
				>
					<NftOwned hideNftOwned={hideModaleNftOwned} uploadImage={uploadImage} nftOwned={nftOwned} />
			</Modal>
		</div>
	);
};

export default ShowcaseNft;
