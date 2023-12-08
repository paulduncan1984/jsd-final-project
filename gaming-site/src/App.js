import { Route, Routes, HashRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";
import SearchResults from "./components/SearchResults";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/search/:query" element={<SearchResults />} />
					<Route path="/games/:id" element={<Details />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

// Build navigation bar (logo, search bar, some pages: games, creators etc)
//  - possible login (store user data and bookmarked games)
// Get search function working for games
