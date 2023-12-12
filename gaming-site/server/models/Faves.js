const mongoose = require("mongoose");

const FavesSchema = new mongoose.Schema({
	id: String,
});

const FavesModel = mongoose.model("favourites", FavesSchema);
module.exports = FavesModel;

/*
Faves needs to sit within the user schema
*/
