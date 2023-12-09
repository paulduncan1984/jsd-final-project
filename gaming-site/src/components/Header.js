import { useContext } from "react";
import SearchForm from "./SearchForm";
import ReactSwitch from "react-switch";
import { ThemeContent } from "../App";

export default function Header() {
	// state - passed by useContext
	const { theme, toggleTheme } = useContext(ThemeContent);

	return (
		<div className="header">
			<h1>Temp logo</h1>
			<ReactSwitch onChange={toggleTheme} checked={theme === "dark-mode"} />
			<SearchForm />
		</div>
	);
} // EO Header
