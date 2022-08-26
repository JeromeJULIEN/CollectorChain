import { Modal, Text } from "@nextui-org/react";

import "./styles.scss";

const NftOwned = ({ uploadImage, nftOwned }) => {
	return (
		<div className="nftOwned">
			<Modal.Header>
				<Text id="modal-title" size={18}>
					NFT owned
				</Text>
			</Modal.Header>
			<Modal.Body>
				<div className="nftOwned__list">
					{nftOwned.map((nft) => {
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
