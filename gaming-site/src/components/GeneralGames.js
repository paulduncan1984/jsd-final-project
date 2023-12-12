import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";

export default function GeneralGames() {
	// state
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// API URL
	const BASE_URL = `https://api.rawg.io/api/games`;

	useEffect(() => {
		loadGeneralGames();
	}, []); // EO useEffect

	const loadGeneralGames = () => {
		axios
			.get(BASE_URL, {
				params: {
					key: process.env.REACT_APP_API_KEY.replace(";", ""),
				},
			})
			.then((res) => {
				// console.log(res.data.results);
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.warn(`Error on API call back: `, err);
				setLoading(false);
			});
	}; // EO loadGenralGames

	// Early return if error
	if (error) {
		return (
			<div>
				<p>Sorry, there seems to be an error.</p>
			</div>
		);
	}

	return (
		<>
			{loading === true ? (
				<div className="grid">
					<Loader />
				</div>
			) : (
				<div className="homepage-container">
					<div className="grid">
						{games.map((game) => (
							<Card key={game.id} id={game.id} />
						))}
					</div>
				</div>
			)}
		</>
	);
}
