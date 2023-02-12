const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"]
	},
	username: {
		type: String,
		required: [true, "Username is required"],
		minLength: [4, "Username should be having at least 4 characters"]
	},
	email: {
		type: String,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
		required: [true, "Email is required"]
	},
	address: {
		street: {
			type: String,
			required: [true, "Street is required"]
		},
		suite: {
			type: String,
			required: [true, "Suite is required"]
		},
		city: {
			type: String,
			match: [/^[A-Za-z\s]*$/, "City can only contain alphabetical letters or space"],
			required: [true, "City is required"]
		},
		zipcode: {
			type: String,
			required: [true, "Zip code is required"],
			match: [/[0-9]{5}\-[0-9]{4}/, "Zip code should be in 12345-1234 format"]
		},
		geo: {
			lat: {
				type: String,
				required: [true, "Latitude is required"]
			},
			lng: {
				type: String,
				required: [true, "Longitude is required"]
			}
		}
	},
	phone: {
		type: String,
		match: [/[0-9]{1}\-[0-9]{3}\-[0-9]{3}\-[0-9]{4}/, "Phone number should be in 1-123-123-1234"],
		required: [true, "Phone is required"]
	},

	website: {
		type: String,
		validate: {
			validator: function (arr) {
				return arr.substring(0, 7) === "http://" || arr.substring(0, 8) === "https://"
					
				
			}
		},
		required: [true, "Website is required"]
	},
	company: {
		name: {
			type: String,
			required: [true, "Company is required"]
		},
		catchPhrase: {
			type: String,
			required: [true, "Catch phrase is required"]
		},
		bs: {
			type: String,
			required: [true, "BS is required"]
		}
	}
})
const UserModel = mongoose.model("User", UserSchema, "Users")

module.exports.User = UserModel
