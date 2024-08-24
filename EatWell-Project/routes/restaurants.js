const express = require("express");

const restaurantsController = require("../controllers/restaurants");

const router = express.Router();

router.get("/", restaurantsController.getIndex);

router.get("/restaurants", restaurantsController.getRestaurants);

router.get("/recommend", restaurantsController.getRecommend);

router.post("/recommend", restaurantsController.postRecommend)

router.get("/about", restaurantsController.getAbout);

module.exports = router;
