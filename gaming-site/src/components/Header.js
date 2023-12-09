import { useContext } from "react";
import SearchForm from "./SearchForm";
import ReactSwitch from "react-switch";
import { ThemeContent } from "../App";

export default function Header() {
	// state - passed by useContext
	const { theme, toggleTheme } = useContext(ThemeContent);

	return (
		<div className="header">
			<div className="header__logo">
				<h1>RAWGPD</h1>
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
