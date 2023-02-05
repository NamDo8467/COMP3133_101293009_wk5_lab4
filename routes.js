const express = require("express")
const router = express.Router()
const { Restaurant } = require("./models/Restaurant")

router.get("/", (req, res) => {
	res.send("Hello")
})

// router.post("/insertData", async (req, res) => {
// 	const { data } = req.body

// 	try {
// 		const result = await Restaurant.insertMany(data)
// 		res.status(200).send("Insert data successfully")
// 	} catch (error) {
// 		console.log(error)
// 		res.status(400).json(error)
// 	}
// })
router.get("/restaurants", async (req, res) => {
	const query = req.query?.sortBy
	if (query === "ASC") {
		const restaurants = await Restaurant.find().select({ address: 0 }).sort({ restaurant_id: 1 })
		res.status(200).json(restaurants)
		return
	} else if (query === "DESC") {
		const restaurants = await Restaurant.find().select({ address: 0 }).sort({ restaurant_id: -1 })
		res.status(200).json(restaurants)
		return
	}
	try {
		const data = await Restaurant.find()
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ message: "Not found" })
	}
})

router.get("/restaurants/cuisine/:cuisine", async (req, res) => {
	const cuisine = req.params.cuisine

	try {
		const restaurantsByCuisine = await Restaurant.find({ cuisine })
		res.status(200).json(restaurantsByCuisine)
	} catch (error) {
		res.status(404).json({ message: "Not found" })
	}
})

router.get("/restaurants/Delicatessen", async (req, res) => {
	const cuisine = "Delicatessen"

	try {
		const restaurants = await Restaurant.find({ cuisine }).select({ cuisine: 1, name: 1, city: 1, _id: 0 }).sort({ name: 1 })
		const returnedRestaurants = restaurants.filter(restaurant => restaurant.city !== "Brooklyn")
		res.status(200).json(returnedRestaurants)
	} catch (error) {
		res.status(500).json(error)
	}
})
module.exports.router = router
