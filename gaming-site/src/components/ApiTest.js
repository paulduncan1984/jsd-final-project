import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ApiTest() {
	const [games, setGames] = useState([]);

	const API_KEY = "2f1343049971445f88da5670b14774f3";
	const BASE_URL = `https://api.rawg.io/api/games`;

	const slug = "the last of us";
	useEffect(() => {
		loadSearchResults(slug);
	}, [slug]); // EO useEffect

	const loadSearchResults = () => {
		axios
			.get(BASE_URL, {
				params: {
					key: API_KEY,
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
