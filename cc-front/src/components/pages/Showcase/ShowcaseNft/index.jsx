import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "rsuite";
import { setShowcaseNftDisplayed } from "../../../../../store/actions/user";
import NftOwned from "../../../modals/NftOwned";
import "./styles.scss";

const ShowcaseNft = ({id, name}) => {

	const dispatch = useDispatch();

	const nftOwned = useSelector((state) => state.user.nftOwned);

	const showcasedNFT = useSelector((state) => state.user.showcaseNftDisplayed);
	console.log('showcasedNFT >>>',showcasedNFT)
	const URLToDisplay = showcasedNFT.find(nft => nft.id == id)
	// console.log('URLToDisplay>>>>', URLToDisplay)

	const [isModaleNftOwnedVisible, setIsModaleNftOwnedVisible] = useState(false);
	
	const hideModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(false);
	};

	const [tempNftSelected, setTempNftSelected] = useState([]);
	const [lastNftSelected, setLastNftSelected] = useState({});
	const [src, setSrc] = useState('');

	const uploadImage = (event) => {
		console.log('entrée dnas uploadImage', event.target.src);
		// console.log("tempNFTbefore>>", tempNftSelected);
		// setTempNftSelected((tempNftSelected) => ({
		// 	...tempNftSelected,
		// 	[event.target.name]: nftOwned.find((nft) => (nft = event.target.id))
		// }));
		setLastNftSelected(event.target.src);
		setSrc(event.target.src)
		hideModaleNftOwned();
	};
	
	useEffect(() => {
		// console.log("TempNftSelected after>>>", tempNftSelected);
		if(src){

			dispatch(setShowcaseNftDisplayed(lastNftSelected, id))
		}
	},[src])

	// useEffect(() => {
	// 	// console.log("TempNftSelected after>>>", tempNftSelected);
	// 	dispatch(setShowcaseNftDisplayed(tempNftSelected));
	// 	// console.log("Last nft selected >>>", lastNftSelected);
	// }, [tempNftSelected]);

	const showModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(true);
	};

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
					<NftOwned id={id} uploadImage={uploadImage} nftOwned={nftOwned}/>
			</Modal>
		</div>
	);
};

export default ShowcaseNft;
