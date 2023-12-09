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
				console.log(res.data.results);
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.warn(`Error on API call back: `, err);
				setLoading(false);
			});
	}; // EO loadGenralGames

	// handlers
	const handleClick = (id) => {
		console.log("clicked");
		navigateTo(`/games/${id}`);
	}; // EO handleClick

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
			<div className="homepage-container">
				<div className="filters"></div>
				<div className="grid">
					{games.map((game) => (
						<Card
							key={game.id}
							image={game.background_image}
							title={game.name}
							id={game.id}
							platforms={game.parent_platforms}
							onClick={() => handleClick(game.id)}
						/>
					))}
				</div>
			</div>
		</>
	);
}
