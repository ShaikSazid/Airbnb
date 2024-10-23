const mongoose = require("mongoose");
const initData = require("./data.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/voyago";
const Listing = require("../models/listing.js");

main().then((res) => {
    console.log("Connected to Database")
})
.catch((err) => {
    console.log(`Error occured ${err}`);
});

async function main() {
    mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: '65f151c9b616c55510018c39' }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();