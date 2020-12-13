const LocalStrategy = require("passport-local").Strategy;

const mongoose = require("../../../Week 11 - MongoDB/03 CRUD/node_modules/mongoose");

const bcrypt = require("bcryptjs");

//user model
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //user cocok
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "email tidak terdaftar" });
          }

          //cek password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "password salah" });
            }
          });
        })
        .catch((err) => console.log(err));
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
