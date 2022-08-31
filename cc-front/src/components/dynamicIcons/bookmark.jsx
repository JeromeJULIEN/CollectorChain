import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNftToFavorite, removeNftToFavorite } from "../../../store/actions/user";

const BookmarkIcon = ({ nftId }) => {
	const userId = useSelector((state) => state.user.id);

	const dispatch = useDispatch();
	const [bookmarkFilled, setBookmarkFilled] = useState(false);

	const handleBookmark = () => {
		setBookmarkFilled(!bookmarkFilled);
		if (bookmarkFilled === true) {
			console.log("bookmark false");
			dispatch(removeNftToFavorite(userId, nftId));
		} else {
			console.log("bookmark true");
			dispatch(addNftToFavorite(userId, nftId));
		}
	};

	return (
		<div>
			{bookmarkFilled === false ? (
				<ion-icon name="bookmarks-outline" onClick={handleBookmark}></ion-icon>
			) : (
				<ion-icon name="bookmarks-outline" onClick={handleBookmark} style={{ color: "red" }}></ion-icon>
			)}
		</div>
	);
};

export default BookmarkIcon;
