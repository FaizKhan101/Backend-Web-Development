const Restaurant = require("../models/restaurant");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getRestaurants = async(req, res, next) => {
    const restaurants = await Restaurant.findAll()
  res.render("restaurants", { restaurants });
};

exports.getRecommend = (req, res, next) => {
  res.render("recommend");
};

exports.postRecommend = async (req, res, next) => {
  const name = req.body.name;
  const address = req.body.address;
  const type = req.body.type;
  const website = req.body.website;
  const description = req.body.description;

  const restaurant = new Restaurant(name, address, type, website, description);

  await restaurant.save();
  res.redirect("/restaurants");
};

exports.getAbout = (req, res, next) => {
  res.render("about");
};
