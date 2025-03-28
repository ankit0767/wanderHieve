const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing= require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
    }
}
const initDB = async() =>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj,owner: "67dbb481042e78b136465642"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
main().then(() => {
    initDB();
});