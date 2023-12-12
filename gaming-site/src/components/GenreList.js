import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../App";

export default function GenreList() {
	// state
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// state - passed by useContext
	const { userData, setUserData } = useContext(Context);

	// routing
	const navigateTo = useNavigate();

	// API URL
	const BASE_URL = `https://api.rawg.io/api/genres`;

	useEffect(() => {
		loadGenresList();
	}, []); // EO useEffect

	const loadGenresList = () => {
		axios
			.get(BASE_URL, {
				params: {
					key: process.env.REACT_APP_API_KEY.replace(";", ""),
				},
			})
			.then((res) => {
				// console.log(res.data.results);
				setGenres(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.warn(`Error on API call back: `, err);
				setLoading(false);
			});
	}; // EO loadGenreList

	// Early return if error
	if (error) {
		return (
			<div>
				<p>Sorry, there seems to be an error with your selection.</p>
			</div>
		);
	}

	return (
		<div className="sideBar">
			<div className="userSummary">
				{userData ? (
					<>
						<p>
							Gamer: <strong>{userData.name}</strong>
						</p>
						<p>
							Games in wish list: <strong>{userData.favourites.length}</strong>
						</p>
						<p>
							<Link to="/portal">Wish list </Link>
						</p>
						<p className="signOut" onClick={() => setUserData(null)}>
							Sign out
						</p>
					</>
				) : (
					<>
						<h2>
							<Link to="/login">Login</Link>
						</h2>
					</>
				)}
			</div>
			<div className="genreList">
				<h3>Filters</h3>
				{genres.map((genre, index) => (
					<>
						<p key={index} onClick={() => navigateTo(`/filter/${genre.name}`)}>
							{genre.name}
						</p>
					</>
				))}
			</div>
		</div>
	);
} // EO GenreList

// Why am I getting the key warning here
