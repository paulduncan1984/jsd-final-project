import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";
import SearchResults from "./components/SearchResults";
import GenreList from "./components/GenreList";
import GeneralGames from "./components/GeneralGames";
import FilterResults from "./components/FilterResults";
import Login from "./components/Login";
import Register from "./components/Register";
import Portal from "./components/Portal";

export const Context = createContext(null);

function App() {
	// state
	const [theme, setTheme] = useState("light-mode");
	const [userId, setUserId] = useState();
	const [userData, setUserData] = useState();

	// handlers
	const toggleTheme = () => {
		setTheme((currTheme) =>
			currTheme === "light-mode" ? "dark-mode" : "light-mode"
		);
	}; // EO toggleTheme

	return (
		<div className="App" id={theme}>
			<Context.Provider
				value={{
					theme,
					toggleTheme,
					userId,
					setUserId,
					userData,
					setUserData,
				}}
			>
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
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/portal" element={<Portal />} />
						</Routes>
					</div>
				</Router>
			</Context.Provider>
		</div>
	);
}

export default App;

/////// To do's
// 1. Set up a laoder
// 2. if I have time, look up React protected routes

/////// DRY LOG
// Can rendering of the icons be captured in a function?
// i.e something like:
// const renderIcon = (data, platform) => {
// data.includes(platform) ? (
// 	<img src={`${platform}Icon`} alt={platform} />
// )
// } // EO renderIcon
