import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
	// state
	const [searchText, setSearchText] = useState("");
	// Routing
	const navigateTo = useNavigate();

	// handlers
	const handleSubmit = (e) => {
		e.preventDefault();
		navigateTo(`/search/${searchText}`);
		// reset search form
		setSearchText("");
	};
	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				type="searchText"
				value={searchText}
				placeholder="Search 1000s of games..."
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button className="btn__form--search">Search</button>
		</form>
	);
}
