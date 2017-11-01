var express = require("express");

var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  })
});

router.post("/burgers/create", function(req, res) {
  console.log("Req. body: ")
  console.log(req.body)
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function() {
    res.redirect("/");
  });
});

// router.put("/burgers/rating", function(req, res) {
//   db.Burger.update({
//     rating: req.body.rating
//   }, {
//     where: {
//       id: req.body.burger_id
//     }
//   }).then(function(r) {
//     res.json(r)
//   })
// })

router.put("/burgers/update", function(req, res) {
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.body.burger_id
    }
  }).then(function() {
    res.redirect("/")
  })
});

module.exports = router;
