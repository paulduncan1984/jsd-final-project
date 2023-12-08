import { useParams, useNavigate } from "react-router-dom";

export default function Details() {
	// routing
	const params = useParams();
	const navigateTo = useNavigate();
	console.log(params.id);
	return <div>Details</div>;
} // EO Details
