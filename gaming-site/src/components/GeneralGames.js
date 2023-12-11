import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

export default function GeneralGames() {
	// state
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// routing
	const navigateTo = useNavigate();

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
				<p>Loading...</p>
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
