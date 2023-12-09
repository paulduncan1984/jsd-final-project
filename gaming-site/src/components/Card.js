// Icon imports
import psIcon from "../images/icons/icons8-playstation.svg";
import xboxIcon from "../images/icons/icons8-xbox.svg";
import iosIcon from "../images/icons/icons8-apple.svg";
import winIcon from "../images/icons/icons8-windows-10.svg";
import segaIcon from "../images/icons/icons8-sega-48.png";
import ninIcon from "../images/icons/icons8-nintendo-48.png";
import linuxIcon from "../images/icons/icons8-linux-48.png";
import androidIcon from "../images/icons/icons8-android.svg";

export default function Card({ image, title, id, onClick, platforms }) {
	return (
		<div className="card" onClick={onClick}>
			<img className="card__image" src={image} alt={title} />
			<div className="card__platforms">
				{platforms.map(({ platform }) => (
					<span key={platform.id}>
						{platform.name.includes("PlayStation") ? (
							<img src={psIcon} alt="PlayStation" />
						) : null}{" "}
						{platform.name.includes("Xbox") ? (
							<img src={xboxIcon} alt="Xbox" />
						) : null}
						{platform.name.includes("iOS") ? (
							<img src={iosIcon} alt="iOS" />
						) : null}
						{platform.name.includes("PC") ? (
							<img src={winIcon} alt="PC" />
						) : null}
						{platform.name.includes("Nintendo") ? (
							<img src={ninIcon} alt="Nintendo" />
						) : null}
						{platform.name.includes("SEGA") ? (
							<img src={segaIcon} alt="SEGA" />
						) : null}
						{platform.name.includes("Android") ? (
							<img src={androidIcon} alt="Android" />
						) : null}
						{platform.name.includes("Linux") ? (
							<img src={linuxIcon} alt="Linux" />
						) : null}
					</span>
				))}
			</div>
			<h2 className="card__heading">{title}</h2>
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
