import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiTest() {
	const [games, setGames] = useState([]);

	console.log("API Key", process.env.REACT_APP_API_KEY.replace(";", ""));

	const BASE_URL = `https://api.rawg.io/api/games`;

	const slug = "the last of us";
	useEffect(() => {
		loadSearchResults(slug);
	}, [slug]); // EO useEffect

	const loadSearchResults = () => {
		axios
			.get(BASE_URL, {
				params: {
					key: process.env.REACT_APP_API_KEY.replace(";", ""),
					search: slug,
				},
			})
			.then((res) => {
				console.log(res.data.results);
				setGames(res.data.results);
			});
	}; // EO loadSearchResults

	return (
		<div>
			ApiTest
			{games.map((game) => (
				<img src={game.background_image} alt={game.slug} />
			))}
		</div>
	);
}

export default ApiTest;
