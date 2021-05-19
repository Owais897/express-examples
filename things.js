var express = require("express");
var router = express.Router();
router.post("/", function (req, res) {
  // req.body = {
  //   id: 13131,
  //   name: "owais",
  // };
  res.send("POST 2222 on things.");
});

router.get("/", function (req, res) {
  res.send("GET route on things.");
});
// http://localhost:3000/api?id=df
router.get("/api", function (req, res) {
  res.send("GET route on things ddddd" + JSON.stringify(req.query.id));
});
// http://localhost:3000/things/132
router.get("/:id", function (req, res) {
  res.send("GET route on things kkkkk" + req.params.id);
});

router.post("/test", function (req, res) {
  res.send("POST route on things.");
});
router.all("/all", function (req, res) {
  res.send("HTTP method doesn't have any effect on this route!");
});

//export this router to use in our index.js
module.exports = router;
