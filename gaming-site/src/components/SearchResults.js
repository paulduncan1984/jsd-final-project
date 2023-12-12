import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";

export default function SearchResults() {
	// state
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// routing
	const params = useParams();
	const navigateTo = useNavigate();

	// API URL
	const BASE_URL = `https://api.rawg.io/api/games`;

	useEffect(() => {
		loadSearchResults(params.query);
	}, [params.query]); // EO useEffect

	const loadSearchResults = (query) => {
		axios
			.get(BASE_URL, {
				params: {
					key: process.env.REACT_APP_API_KEY.replace(";", ""),
					search: query,
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
	}; // EO loadSearchResults

	// Early return if error
	if (error) {
		return (
			<div>
				<p>
					Sorry, there seems to be an error. Please check your search query and
					try again.
				</p>
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
				<div className="grid">
					{games.map((game) => (
						<Card key={game.id} id={game.id} />
					))}
				</div>
			)}
		</>
	);
} // EO SearchResults
