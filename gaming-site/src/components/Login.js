import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../App";

export default function Login() {
	// state - passed by useContext
	const { userId, setUserId, userData, setUserData } = useContext(Context);
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

				const { _id } = res.data;
				// setUserData(res.date);
				setUserId(_id);
				const response = res.data;
				setUserData(response);
				navigateTo("/");
				// console.log(userId);
				console.log(userData);
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(userId);
	}; // EO handleSubmit

	return (
		<div className="formContainer">
			<div className="loginForm">
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<br />
					<input
						type="email"
						id="email"
						placeholder="Enter your email address"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<br />
					<label htmlFor="password">Password</label>
					<br />
					<input
						type="password"
						id="password"
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<button className="btn__login">Login</button>
				</form>
				<div>
					<br />
					<h2>Need to create an account? </h2>
					<button
						className="btn__login--secondary"
						onClick={() => navigateTo("/register")}
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
}
