exports.getIndex = (req, res, next) => {
    res.render("index")
}

exports.getRestaurants = (req, res, next) => {
    res.render("restaurants")
}

exports.getRecommend = (req, res, next) => {
    res.render("recommend")
}

exports.postRecommend = (req, res, next) => {
    
}

exports.getAbout = (req, res, next) => {
    res.render("about")
}