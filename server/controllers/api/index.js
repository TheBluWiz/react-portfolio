const router = require("express").Router();

router.post("/api/form", (req, res) => {
  res.json({message: "Hello World!"});
});

module.exports = router;