const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review =require("./review.js")

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
    filename: { type: String, default: "listingimage" },
    url: { type: String, default: "https://unsplash.com/photos/a-view-of-a-city-from-the-water-xLQM7Tnqdpg" }
},

    description: String,  // Fixed spelling mistake
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
});
listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await review.deleteMany({_id: {$in: listing.reviews}});

    }
   
});

// ✅ Correct model definition and export
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
