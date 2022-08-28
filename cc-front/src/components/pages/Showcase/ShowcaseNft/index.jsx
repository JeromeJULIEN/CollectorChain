import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "rsuite";
import { removeNftFromTodisplayList, setShowcaseNftDisplayed } from "../../../../../store/actions/user";
import NftOwned from "../../../modals/NftOwned";
import "./styles.scss";

const ShowcaseNft = ({id, name}) => {

	const dispatch = useDispatch();

	const nftOwned = useSelector((state) => state.user.nftOwned);

	// Recherche de l'image devant etre associée à cette case :
	// récupération de l'image par une recherche dans le state en fonction de l'id de la case
	const showcasedNFT = useSelector((state) => state.user.showcaseNftDisplayed);
	const URLToDisplay = showcasedNFT.find(nft => nft.id == id)
	console.log('URLToDisplay>>>>', URLToDisplay)

	// Gestion de l'affihage de la modale
	const [isModaleNftOwnedVisible, setIsModaleNftOwnedVisible] = useState(false);
	const hideModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(false);
	};
	const showModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(true);
	};

	// Variable nécessaire au fonctionnement du code
	const [lastNftSelected, setLastNftSelected] = useState({});
	const [src, setSrc] = useState('');

	const uploadImage = (event) => {
		// On stock les informations à utiliser dans le useEffect
		setLastNftSelected(event.target.src);
		setSrc(event.target.src)
		hideModaleNftOwned();
	};
	
	// Gestion des dispatch reducer dans un useEffect (ne marche si dispatch en meme temps que la modification des varaibles)
	useEffect(() => {
		// console.log("TempNftSelected after>>>", tempNftSelected);
		if(src){

			dispatch(setShowcaseNftDisplayed(lastNftSelected, id))
			dispatch(removeNftFromTodisplayList(lastNftSelected))
		}
	},[src])


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
				{/* Condition d'affichage de l'image si une image est associé à cette case */}
				<img src={URLToDisplay? URLToDisplay.media : ''} className="showcase__pic-img" alt="" />
				
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
