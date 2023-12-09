import React, { useEffect, useState } from "react";
import { Route, Routes, HashRouter as Router, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

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
			{/* <ul> */}
			<h2>Filters</h2>
			<hr />
			{genres.map((genre) => (
				// <li key={genre.name}>
				// 	<input
				// 		type="checkbox"
				// 		id={genre.name}
				// 		name={genre.name}
				// 		value={genre.name}
				// 		onChange={() => navigateTo(`/filter/${genre.name}`)}
				// 	/>{" "}
				// 	{genre.name}
				// </li>
				// <li
				// 	key={genre.name}
				// 	style={{
				// 		borderLeft: `solid 10px ${
				// 			isHovered ? "hotpink" : "rgb(32, 31, 31)"
				// 		}`,
				// 		paddingBottom: "10px",
				// 	}}
				// 	onMouseEnter={() => setIsHovered(true)}
				// 	onMouseLeave={() => setIsHovered(false)}
				// 	onClick={() => navigateTo(`/filter/${genre.name}`)}
				// >
				// 	{genre.name}
				// </li>
				<>
					{/* <p key={genre.name}>
						<Link to={`/filter/${genre.name}`}>{genre.name}</Link>
					</p>
					<br /> */}
					<p
						key={genre.name}
						onClick={() => navigateTo(`/filter/${genre.name}`)}
					>
						{genre.name}
					</p>
					{/* <br /> */}
				</>
			))}
			{/* </ul> */}
		</div>
	);
} // EO GenreList

// https://api.rawg.io/api/genres?key=2f1343049971445f88da5670b14774f3
