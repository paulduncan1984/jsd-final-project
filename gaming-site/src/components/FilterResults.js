import { useParams, useNavigate } from "react-router-dom";

function FilterResults() {
	// routing
	const params = useParams();
	const navigateTo = useNavigate();
	console.log(params.query);
	return <div>{params.query}</div>;
}

export default FilterResults;
