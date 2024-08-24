const db = require("../data/database")

class Restaurant {
    constructor (name, address, type, website, description) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.website = website;
        this.description = description
    }

    save() {
        return db.getDb().collection("restaurants").insertOne(this)
    }

    static findAll() {
        return db.getDb().collection("restaurants").find().toArray()
    }
}

module.exports = Restaurant