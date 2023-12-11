import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";
import SearchResults from "./components/SearchResults";
import GenreList from "./components/GenreList";
import GeneralGames from "./components/GeneralGames";
import FilterResults from "./components/FilterResults";

// Light and Dark mode - React context
export const ThemeContent = createContext(null);
function App() {
	// state
	const [theme, setTheme] = useState("light-mode");

	// handlers
	const toggleTheme = () => {
		setTheme((currTheme) =>
			currTheme === "light-mode" ? "dark-mode" : "light-mode"
		);
	}; // EO toggleTheme

	return (
		<div className="App" id={theme}>
			<ThemeContent.Provider value={{ theme, toggleTheme }}>
				<Router>
					<Header />
					<div className="main">
						<GenreList />
						<Routes>
							<Route path="/" exact element={<GeneralGames />} />
							<Route path="/search/:query" element={<SearchResults />} />
							<Route path="/games/:id" element={<Details />} />
							<Route path="/filter/:query" element={<FilterResults />} />
							<Route path="/games/:id" element={<Details />} />
						</Routes>
					</div>
				</Router>
			</ThemeContent.Provider>
		</div>
	);
}

export default App;

// Build navigation bar (logo, search bar, some pages: games, creators etc)
//  - possible login (store user data and bookmarked games)
// To do's
// 1. create a function that maps the plaforms array and outputs platform icon (if playstation, show PS icon)
// 2. Do basic stylign on card
// 3. Do basic styling on early error return
// 4. Set up a laoder
