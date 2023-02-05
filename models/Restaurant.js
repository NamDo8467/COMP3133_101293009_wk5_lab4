const mongoose = require("mongoose")

const RestaurantSchema = mongoose.Schema({
	address: {
		building: String,
		street: String,
		zipcode: String
	},
	city: String,
	cuisine: String,
	name: String,
	restaurant_id: String
})
const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema, "Restaurants")

module.exports.Restaurant = RestaurantModel
