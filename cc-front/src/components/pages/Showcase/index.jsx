import { useSelector } from "react-redux";
import { useState } from "react";
import { Grid, Row, Col } from "rsuite";
import ShowcaseNft from "./ShowcaseNft";
import SearchBarShowcase from "../../searchBars/SearchBarShowcase";
// import { useDispatch } from "react-redux";
// import { isOpenToContact, setMediaUrl, deleteMediaUrl } from "../../../../store/actions/user";
// import "./styles.scss";

const Showcase = () => {
	// const dispatch = useDispatch();

	const nftOwned = useSelector((state) => state.user.nftOwned);
	console.log("NFT_OWNED >>>", nftOwned);

	// const [isUpdateProfileVisible, setIsUpdateProfileVisible] = useState(false);
	// const showUpdateProfile = () => {
	// 	setIsUpdateProfileVisible(true);
	// };
	// const hideUpdateProfile = () => {
	// 	setIsUpdateProfileVisible(false);
	// };

	//! Gestion de l'upload des images
	// Creation d'un state local pour stocker les images
	const [pictures, setPictures] = useState([]);
	// Creation d'un state local pour stocker le chemin URL des images
	const [picturesURL, setPicturesURL] = useState([]);

	// console.log('pictures URL >>>', picturesURL)
	// Fonction pour stocker l'image dans le state local
	const uploadImage = (event) => {
		// console.log('file >>>',event.target.files)
		setPictures((pictures) => ({
			...pictures,
			[event.target.name]: event.target.files,
		}));
		// Il faut stocker un chemin URL pour afficher l'image
		setPicturesURL((picturesURL) => ({
			...picturesURL,
			[event.target.name]: URL.createObjectURL(event.target.files[0]),
		}));
		//! Fin gestion upload image
	};
	console.log("PICTURES >>> ", pictures);
	console.log("PICTURES_URL >>> ", picturesURL);

	const deleteImage = (event) => {
		console.log("picture name >>>", event.target.id);
		setPictures((pictures) => ({
			...pictures,
			[event.target.id]: "",
		}));
		console.log("pictures After >>>", pictures);
		// Il faut stocker un chemin URL pour afficher l'image
		setPicturesURL((picturesURL) => ({
			...picturesURL,
			[event.target.id]: URL.revokeObjectURL(event.target.id[0]),
		}));
	};
	//! Fin gestion delete image

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
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={1} name="nft1" />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={2} name="nft2" />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={3} name="nft3" />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={4} name={"nft4"} />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={5} name={"nft5"} />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={6} name={"nft6"} />
					</Col>
					<Col xs={12} sm={10} md={8}>
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={7} name={"nft7"} />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={8} name={"nft8"} />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={9} name={"nft9"} />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={10} name={"nft10"} />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={11} name={"nft11"} />
						<ShowcaseNft uploadImage={uploadImage} deleteImage={deleteImage} id={12} name={"nft13"} />
					</Col>
				</Row>
			</Grid>
			{/* <Modal className="modaleUpdateProfile" closeButton blur open={isUpdateProfileVisible} onClose={hideUpdateProfile}>
				<UpdateProfile hideUpdateProfile={hideUpdateProfile} />
			</Modal> */}
		</main>
	);
};

export default Showcase;
