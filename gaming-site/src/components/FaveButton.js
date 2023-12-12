import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export default function FaveButton({ id }) {
	// state - passed by useContext
	const { userId, setUserData } = useContext(Context);

	const handleClick = () => {
		console.log("Faves clicked", id);
		axios
			.post(`http://localhost:3001/games/${id}`, {
				userId,
			})
			.then((res) => {
				console.log(`FaveButton: userId:`, userId);
				console.log(res.data);
				setUserData(res.data);
			})
			.catch((err) => {
				console.error("Error saving game id:", err);
			});
	}; // EO handelClick
	return <BookmarkAddIcon onClick={handleClick} style={{ color: "#ff5b14" }} />;
}
