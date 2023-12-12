import { useContext } from "react";
import SearchForm from "./SearchForm";
import ReactSwitch from "react-switch";
import { Context } from "../App";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
	// state - passed by useContext
	const { theme, toggleTheme, signedIn, userData } = useContext(Context);

	return (
		<div className="header">
			<div className="header__logo">
				<Link to="/" exact>
					<h1>RAWGPD</h1>
				</Link>
			</div>
			<div className="header__other">
				<div className="header__switch">
					<label>{theme === "light-mode" ? "Dark" : "Light"}</label>{" "}
					<ReactSwitch
						onColor={"#ff5c16"}
						onChange={toggleTheme}
						checked={theme === "dark-mode"}
					/>
				</div>
				<SearchForm />
			</div>
		</div>
	);
} // EO Header
