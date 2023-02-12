const express = require("express")
const mongoose = require("mongoose")
const app = express()
const { router } = require("./routes")

const PORT = 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

const URI = "mongodb+srv://namdo:namdo@cluster0.qftfl.mongodb.net/comp3133?retryWrites=true&w=majority"

// mongodb+srv://namdo:namdo@cluster0.qftfl.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority

mongoose.connect(URI, { useNewUrlParser: true.valueOf(), useUnifiedTopology: true }, err => {
	if (err) {
		console.log(err)
	}
})
app.listen(PORT, () => {
	console.log("Server is up and running")
})
