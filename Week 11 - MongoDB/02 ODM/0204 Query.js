const mongoose = require("../../Week 12 - Passport.js JWT/autentikasi/node_modules/mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const Member = require("./models/Member");

var myQuery = Member.findOne({
    name: "Starship Enterprise"
})
    .where("email", /boldly/);
myQuery.exec((error, data) => {
    if (data) console.log(data.name);
});
