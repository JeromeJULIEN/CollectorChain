import { Modal, Text } from "@nextui-org/react";
import { useSelector } from "react-redux";

import "./styles.scss";

const NftOwned = ({ uploadImage, nftOwned }) => {
	//! Essaie avec state dédié pour remonter les NFT restant à positionnere
	const nonDisplayedNFT = useSelector(state => state.user.showcaseNftToDisplay);
	// console.log(nonDisplayedNFT);

	//! essaie non concluant en triant localement pour avoir le NFT restant à positionner
	// const nftsDisplayed = useSelector(state => state.user.showcaseNftDisplayed)
	// let nftStillToDisplay = nftOwned
	// console.log('nftDisplayed from modal>>>', nftsDisplayed);
	// console.log('nftOwned >>>', nftOwned);
	// console.log('nft still to display >>>', nftStillToDisplay);
	
	// for (const nftDisplayed of nftsDisplayed) {
	// 	nftStillToDisplay = nftOwned.filter(nft => nft.media !== nftDisplayed.media)
	// 	console.log('boucle',nftStillToDisplay)
	// }

//  = nftOwned.filter(nft => nft.media !== nftDisplayed.media.includes(nft.media))
// 	console.log('nft restant >>>',nftStillToDisplay);
	

	return (
		<div className="nftOwned">
			<Modal.Header>
				<Text id="modal-title" size={18}>
					NFT owned
				</Text>
			</Modal.Header>
			<Modal.Body>
				<div className="nftOwned__list">
					{nonDisplayedNFT.map((nft) => {
						return (
							<div className="nftOwned__card" key={nft.id} onClick={uploadImage}>
								<img src={nft.media} className="nftOwned__card-image" alt="" id={nft.id} name={nft.name} />
								<div className="nftOwned__card-title">{nft.name}</div>
							</div>
						);
					})}
				</div>
			</Modal.Body>
		</div>
	);
};

export default NftOwned;
