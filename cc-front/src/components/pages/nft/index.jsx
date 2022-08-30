import "./styles.scss";
import { Panel, PanelGroup } from "rsuite";
import { Link, useParams } from "react-router-dom";
import NftCard from "../../card/NftCard";
import SlideAuto from "../../slides/SlideAuto";
import { SwiperSlide } from "swiper/react";
import Slide_2x2 from "../../slides/Slide_2x2";
import { useEffect, useState } from "react";
import { Modal } from "@nextui-org/react";
import Purchase from "../../modals/Purchase";
import FullScreen from "../../modals/FullScreen";
import Sell from "../../modals/Sell";
import HeartIcon from "../../dynamicIcons/heart";
import { useDispatch, useSelector } from "react-redux";
import { fetchNftById } from "../../../../store/actions/data";

const Nft = ({ nfts }) => {
	const dispatch = useDispatch()
	// on récupère l'id de la route paramétré
	const { id } = useParams();

	//! Gestion bdd locale
	// on recherche le nft correspondant dans la liste courante du state
	// const displayedNft = nfts.find((nft) => nft.id == id);
	//! Gestion bdd distante
	if(id){
        useEffect(() => {dispatch(fetchNftById(id))},[])
    }
	const displayedNft = useSelector(state => state.nfts.displayedNft)

	// gestion modale purchase
	// 1 - creation d'un state local
	const [isPurchaseVisible, setIsPurchaseVisible] = useState(false);
	const showPurchase = () => {
		setIsPurchaseVisible(true);
	};
	const hidePurchase = () => {
		console.log("test");
		setIsPurchaseVisible(false);
	};

	// gestion modale fullScreen
	const [isFullScreenVisible, setIsFullScreenVisible] = useState(false);
	const showFullScreen = () => {
		console.log("click");
		setIsFullScreenVisible(true);
	};
	const hideFullScreen = () => setIsFullScreenVisible(false);

	//gestion modale sell
	const [isSellVisible, setIsSellVisible] = useState(false);
	const showSell = () => {
		setIsSellVisible(true);
	};
	const hideSell = () => setIsSellVisible(false);

	return (
		<div className="nft">
			<h1 className="nft__title">
				{displayedNft.name}
			</h1>
			<img src={displayedNft.media} alt="" className="nft__image" onClick={showFullScreen} />
			<div className="nft__actionsButtons">
				<ion-icon name="bookmarks-outline"></ion-icon>
				<ion-icon name="share-social-outline"></ion-icon>
				<HeartIcon />
			</div>
			<div className="nft__price">
				{displayedNft.forSale ? (
					<>
						<div className="nft__price__current">
							<p>Current price</p>
							<h3>{displayedNft.price}</h3>
						</div>
						<div className="nft__price__buy">
							<button type="button" onClick={showPurchase}>
								Buy
							</button>
							<button type="button" onClick={showSell}>
								Sell
							</button>
						</div>
					</>
				) : (
					<>
						<p>This nft is not for sale</p>
						<button type="button">Contact the owner</button>
					</>
				)}
			</div>

			<PanelGroup className="nft__infos" accordion bordered>
				<Panel header="Main informations" defaultExpanded>
					<div className="nft__infos__main">
						<div className="nft__infos__main__author">
							<h3>Author</h3>
							<p>Unknown</p>
						</div>
						<div className="nft__infos__main__owner">
							<h3>Owner</h3>
							<p>id : {displayedNft.owner_id}</p>
						</div>
						<div className="nft__infos__main__rarity">
							<h3>Rarity</h3>
							<p>{displayedNft.rarity}</p>
						</div>
					</div>
				</Panel>
				<Panel header="Description" defaultExpanded>
					<p className="nft__infos__description">{displayedNft.description?displayedNft.description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque possimus quod optio corrupti, itaque hic quisquam voluptatibus minima a.'}</p>
				</Panel>
				<Panel header="Details">
					<div className="nft__infos__details">
						<h3>Contract adress</h3>
						<p>0x7dae....a057</p>
						<h3>Token ID</h3>
						<p>2504</p>
						<h3>Creator Earnings</h3>
						<p>2.5%</p>
					</div>
				</Panel>
				<Panel header="Properties">
					<div className="nft__infos__properties">
						<p>Chronograph</p>
						<p>Automatic</p>
						<p>Saphir glass</p>
						<p>Chronograph</p>
						<p>Automatic</p>
						<p>Saphir glass</p>
						<p>Chronograph</p>
						<p>Automatic</p>
						<p>Saphir glass</p>
					</div>
				</Panel>
			</PanelGroup>

			<Modal className="modalePurchase" closeButton blur open={isPurchaseVisible} onClose={hidePurchase}>
				<Purchase nft={displayedNft} hidePurchase={hidePurchase} />
			</Modal>

			<Modal className="modaleFullScreen" closeButton blur open={isFullScreenVisible} onClose={hideFullScreen}>
				<FullScreen media={displayedNft.media} />
			</Modal>

			<Modal className="modaleSell" closeButton blur open={isSellVisible} onClose={hideSell}>
				<Sell nft={displayedNft} hideSell={hideSell} />
			</Modal>
		</div>
	);
};

export default Nft;
