require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)

const userSchema = new mongoose.Schema({
    userID: Number,
    username: String,
    warnings: Number,
    banned: Boolean,
    muted: Boolean
});

module.exports = mongoose.model("User", userSchema);