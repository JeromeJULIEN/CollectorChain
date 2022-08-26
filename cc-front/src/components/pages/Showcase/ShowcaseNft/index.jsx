import "./styles.scss";

const ShowcaseNft = ({ deleteImage, id, name, showModaleNftOwned }) => {
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
				<img src="" className="showcase__pic-img" alt="" />
			</div>
		</div>
	);
};

export default ShowcaseNft;
