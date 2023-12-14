const shopifyController = require("../controllers/shopify_controller.js");
const express = require("express");
const router = express.Router();

router.post("/order/create", async (req, res) => {
  const { error } = await shopifyController.handleOrderCreated(req.body);
  console.log(error);
  res.status(200);
});

module.exports = router;
