import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function FilterResults() {
	// state
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// routing
	const params = useParams();

	// API URL
	const BASE_URL = `https://api.rawg.io/api/genres`;

	useEffect(() => {
		loadGenreResults(params.query);
	}, [params.query]); // EO useEffect

	const loadGenreResults = () => {
		axios
			.get(BASE_URL, {
				params: {
					key: process.env.REACT_APP_API_KEY.replace(";", ""),
				},
			})
			.then((res) => {
				// console.log(res.data.results.name);
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.warn(`Error on API call back: `, err);
				setLoading(false);
			});
	}; // EO loadGenreResults

	// Early return if error
	if (error) {
		return (
			<div>
				<p>Sorry, there seems to be an error with your selection.</p>
			</div>
		);
	}

	return (
		<>
			<div>
				{loading === true ? (
					<p>Loading...</p>
				) : (
					<div className="grid">
						{games.map((game) => (
							<>
								{game.name === params.query ? (
									<>
										{game.games.map((game) => (
											<Card keyy={game.id} id={game.id} />
										))}
									</>
								) : null}
							</>
						))}
					</div>
				)}
			</div>
		</>
	);
}
