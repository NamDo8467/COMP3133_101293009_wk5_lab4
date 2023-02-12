const express = require("express")
const router = express.Router()
const { User } = require("./models/User")

router.get("/", (req, res) => {
	res.send("Hello")
})

router.post("/users", async (req, res) => {
	const { name, username, email, address, phone, website, company } = req.body
// console.log(website.substring(0, 7) === "http://" || website.substring(0, 8) === "https://")
	try {
		const result = await User.create({ name, username, email, address, phone, website, company })
		res.status(200).send("Added successfully")
	} catch (error) {
		res.status(400).json(error)
	}
})

module.exports.router = router
