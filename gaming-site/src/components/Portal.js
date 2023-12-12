import { useContext } from "react";
import { Context } from "../App";
import Card from "./Card";
import Loader from "./Loader";

export default function Portal() {
	// state - passed by useContext
	const { userData, signedIn } = useContext(Context);
	// console.log(userData);
	// console.log(typeof userData.favourites);

	const userFavourites = userData ? userData.favourites : [];
	console.log(userFavourites);

	return (
		<>
			{!userData ? (
				<div className="grid">
					<Loader />
				</div>
			) : (
				<div>
					<div className="grid">
						{userFavourites.map((game, index) => (
							<Card key={index} id={game} />
						))}
					</div>
				</div>
			)}
		</>
	);
}
