const express = require("../../../Week 10 - EJS/node_modules/express");
const router = express.Router();

const { ensureAuthenticated } = require("../config/auth");

router.get("/", (req, res) => res.render("homepage"));

//dasboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name,
  })
);

module.exports = router;
