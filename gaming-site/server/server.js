const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
// const FavesModel = require("./models/Faves");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
	"mongodb+srv://paulduncan1984:cvwjipHzccjMf819@jsdfinal.zea1td8.mongodb.net/?retryWrites=true&w=majority"
);

// Register
app.post("/register", (req, res) => {
	UserModel.create(req.body)
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
});

// Login
app.post("/login", (req, res) => {
	const { email, password } = req.body;
	UserModel.findOne({ email, password }).then((user) => {
		if (user) {
			if (user) {
				res.json(user);
			}
		} else {
			res.json("Error");
		}
	});
});

// Favourites
app.post("/games/:id", async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;

	try {
		const user = await UserModel.findById(userId);
		// console.log("userId:", userId);
		// console.log("user:", user);
		// console.log("Request Body:", req.body);

		if (!user) {
			return res.json("User not found");
		}

		// Check for duplicates
		if (!user.favourites.includes(id)) {
			user.favourites.push(id);
			await user.save();
		}
		res.json(user);
	} catch (err) {
		console.error(err);
	}
});

app.listen(3001, () => {
	console.log("server is running");
});

// Favourites delete
