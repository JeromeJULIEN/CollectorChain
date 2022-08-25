import "./styles.scss";

const ShowcaseNft = ({ deleteImage, uploadImage, id, name, showUpdateProfile }) => {
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
				<label htmlFor="showcasePictureInput" className="showcase__pic-add-icon">
					<ion-icon name="add-circle-outline" size="large"></ion-icon>
				</label>
				<input type="file" accept="image/*" name={name} onClick={showUpdateProfile} onChange={uploadImage} className="showcase__pic-input" id="showcasePictureInput" />
				{/* </> */}
				{/* ) : (
						""
					)} */}
				<img src="https://nouvelles-dujour.com/wp-content/uploads/2022/02/RichApe.png" className="showcase__pic-img" alt="" />
			</div>
		</div>
	);
};

export default ShowcaseNft;
