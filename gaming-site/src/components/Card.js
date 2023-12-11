import { ThemeContent } from "../App";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// Icon imports
import PlayStationIcon from "../images/icons/icons8-playstation.svg";
import PlayStationIconDark from "../images/icons/icons8-playstation-dark.svg";
import XboxIcon from "../images/icons/icons8-xbox.svg";
import XboxIconDark from "../images/icons/icons8-xbox-dark.svg";
import iOSIcon from "../images/icons/icons8-apple.svg";
import iOSIconDark from "../images/icons/icons8-apple-dark.svg";
import PCIcon from "../images/icons/icons8-windows-10.svg";
import PCIconDark from "../images/icons/icons8-windows-dark.png";
import SEGAIcon from "../images/icons/icons8-sega-48.png";
import SEGAIconDark from "../images/icons/icons8-sega-dark.png";
import NintendoIcon from "../images/icons/icons8-nintendo-48.png";
import NintendoIconDark from "../images/icons/icons8-nintendo-dark.png";
import linuxIcon from "../images/icons/icons8-linux-48.png";
import linuxIconDark from "../images/icons/icons8-linux-dark.png";
import AndroidIcon from "../images/icons/icons8-android.svg";
import AndroidIconDark from "../images/icons/icons8-android-dark.png";

export default function NewCard({ id }) {
	// state
	const [game, setGame] = useState({
		parent_platforms: [],
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// state - passed by useContext
	const { theme } = useContext(ThemeContent);
	// routing
	const params = useParams();
	const navigateTo = useNavigate();

	// API URL
	const BASE_URL = `https://api.rawg.io/api/games/${id}`;

	useEffect(() => {
		loadGameDetails(id);
	}, [id]); // EO useEffect

	const loadGameDetails = () => {
		axios
			.get(BASE_URL, {
				params: {
					key: process.env.REACT_APP_API_KEY.replace(";", ""),
				},
			})
			.then((res) => {
				// console.log(res.data);
				setGame(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.warn(`Error on API call back: `, err);
				setLoading(false);
			});
	};

	// Early return if error
	if (error) {
		return (
			<div>
				<p>Sorry, there seems to be an error.</p>
			</div>
		);
	}

	return (
		<div
			className="card"
			key={game.id}
			onClick={() => navigateTo(`/games/${game.id}`)}
		>
			<img
				className="card__image"
				src={game.background_image}
				alt={game.name}
			/>
			<div className="card__platforms">
				{game.parent_platforms.map(({ platform }) => (
					<span key={platform.id}>
						{platform.name.includes("PlayStation") ? (
							<img
								src={
									theme === "dark-mode" ? PlayStationIcon : PlayStationIconDark
								}
								alt="PlayStation"
							/>
						) : null}{" "}
						{platform.name.includes("Xbox") ? (
							<img
								src={theme === "dark-mode" ? XboxIcon : XboxIconDark}
								alt="Xbox"
							/>
						) : null}
						{platform.name.includes("iOS") ? (
							<img
								src={theme === "dark-mode" ? iOSIcon : iOSIconDark}
								alt="iOS"
							/>
						) : null}
						{platform.name.includes("PC") ? (
							<img src={theme === "dark-mode" ? PCIcon : PCIconDark} alt="PC" />
						) : null}
						{platform.name.includes("Nintendo") ? (
							<img
								src={theme === "dark-mode" ? NintendoIcon : NintendoIconDark}
								alt="Nintendo"
							/>
						) : null}
						{platform.name.includes("SEGA") ? (
							<img
								src={theme === "dark-mode" ? SEGAIcon : SEGAIconDark}
								alt="SEGA"
							/>
						) : null}
						{platform.name.includes("Android") ? (
							<img
								src={theme === "dark-mode" ? AndroidIcon : AndroidIconDark}
								alt="Android"
							/>
						) : null}
						{platform.name.includes("Linux") ? (
							<img
								src={theme === "dark-mode" ? linuxIcon : linuxIconDark}
								alt="Linux"
							/>
						) : null}
					</span>
				))}
			</div>
			<h2 className="card__heading">{game.name}</h2>
			<button className="btn__card">Game details</button>
		</div>
	);
}

/////// What info could I place on this card:
// 1. Genres
// 2. Metacritic score (probabyly best for the details page)
// 3. Parent platforms (turn these into icons)
// 4. Ratings
// 5. Stores (probabyly best for the details page)
// 6. Tags (probabyly best for the details page)
// 7. Release date

/////// DRY LOG
// Can rendering of the icons be captured in a function?
// i.e something like:
// const renderIcon = (data, platform) => {
// data.includes(platform) ? (
// 	<img src={`${platform}Icon`} alt={platform} />
// )
// } // EO renderIcon
