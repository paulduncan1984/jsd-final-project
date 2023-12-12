import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
	//state
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	// routing
	const navigateTo = useNavigate();

	// handlers
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/register", { name, email, password })
			.then((res) => {
				console.log(res);
				navigateTo("/login");
			})
			.catch((err) => {
				console.log(err);
			});
	}; // EO handleSubmit

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Full name</label>
				<input
					type="text"
					id="name"
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="text"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button>Register</button>
			</form>
			<div>
				<h2>Alrady have an account? Login</h2>
				<button onClick={() => navigateTo("/login")}>Login</button>
			</div>
		</>
	);
}
