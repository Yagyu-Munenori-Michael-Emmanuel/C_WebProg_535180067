const mongoose = require("../../../Week 12 - Passport.js JWT/autentikasi/node_modules/mongoose"),
    memberSchema = mongoose.Schema({
        name: String,
        email: String,
        credit: Number
    });
module.exports = mongoose.model("Member", memberSchema);
