import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
	//state
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	// routing
	const navigateTo = useNavigate();

	// handlers
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/login", { email, password })
			.then((res) => {
				console.log(res);
				if (res.data === "Success") {
					navigateTo("/portal");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}; // EO handleSubmit

	return (
		<>
			<form onSubmit={handleSubmit}>
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
				<button>Login</button>
			</form>
			<div>
				<h2>Need to create an account? </h2>
				<button onClick={() => navigateTo("/register")}>Register</button>
			</div>
		</>
	);
}
