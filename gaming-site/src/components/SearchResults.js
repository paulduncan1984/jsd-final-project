import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

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
				console.log(res.data.results);
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.warn(`Error on API call back: `, err);
				setLoading(false);
			});
	}; // EO loadSearchResults

	// handlers
	const handleClick = (id) => {
		console.log("clicked");
		navigateTo(`/games/${id}`);
	}; // EO handleClick

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
		</>
	);
} // EO SearchResults

// To do's
// 1. create a function that maps the plaforms array and outputs platform icon (if playstation, show PS icon)
// 2. Do basic stylign on card
// 3. Do basic styling on early error return
// 4. Set up a laoder
