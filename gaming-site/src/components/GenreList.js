import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GenreList() {
	// state
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isHovered, setIsHovered] = useState(false);

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
		<div className="genreList">
			<h2>Filters</h2>
			{genres.map((genre, index) => (
				<>
					<p key={index} onClick={() => navigateTo(`/filter/${genre.name}`)}>
						{genre.name}
					</p>
				</>
			))}
		</div>
	);
} // EO GenreList

// https://api.rawg.io/api/genres?key=2f1343049971445f88da5670b14774f3

// Why am I getting the key warning here
