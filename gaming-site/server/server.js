// mongodb+srv://paulduncan1984:<password>@jsdfinal.zea1td8.mongodb.net/?retryWrites=true&w=majority

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
	"mongodb+srv://paulduncan1984:cvwjipHzccjMf819@jsdfinal.zea1td8.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/login", (req, res) => {
	const { email, password } = req.body;
	UserModel.findOne({ email: email }).then((user) => {
		if (user) {
			if (user.password === password) {
				res.json("Success");
			} else {
				res.json("Incorrect password");
			}
		} else {
			res.json("No account found");
		}
	});
});

app.post("/register", (req, res) => {
	UserModel.create(req.body)
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
});

app.listen(3001, () => {
	console.log("server is running");
});
