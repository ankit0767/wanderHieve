const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path= require("path");
const methodOverride = require("method-override");
const ejsMate= require("ejs-mate");  
const exp = require("constants");
const wrapAsync= require("./utils/wrapAsynk.js");
const ExpreesError= require("./utils/expressError.js");
const { listingSchema} = require("./schema.js");

const app = express();
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
main();

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

const validateListing = (req,res,next)=>{
    let {error}= listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}
// index route
app.get("/listings",  wrapAsync(async(req,res)=>{
    const allListings= await Listing.find({});
    res.render("listings/index.ejs",{allListings});

}));

//new route
app.get("/listings/new", (req,res) =>{
    res.render("listings/new.ejs");
});

// show route
app.get("/listings/:id", wrapAsync (async (req,res)=> {
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});

}));
//create rout
app.post("/listings",validateListing, wrapAsync (async (req,res, next)=>{

        const newListing = new Listing(req.body.listing);
       
        await newListing.save();
        res.redirect("/listings");
  
})
);

//editt route
app.get("/listings/:id/edit", wrapAsync(async (req,res) =>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});

}));

//update route
app.put("/listings/:id",validateListing, wrapAsync ( async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings");
}));
//delete route
app.delete("/listings/:id", wrapAsync(async (req, res)=>{
    let {id} = req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    res.redirect("/listings");
}));


// Test route to insert a sample listing
// app.get("/testListing", async (req, res) => {
//     try {
//         let sampleListing = new Listing({
//             title: "My Villa",
//             description: "By the beach",
//             price: 1200,
//             location: "Goa",
//             country: "India",
//         });

//         await sampleListing.save();
//         console.log("Sample listing saved successfully.");
//         res.send("Successful testing");
//     } catch (error) {
//         console.error("Error saving listing:", error);
//         res.status(500).send("Error saving listing");
//     }
// });

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found")); // Pass error to next middleware
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log("Error Occurred:", err); // Debugging
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).render("error.ejs", {message});
    // res.status(statusCode).send(message); 
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
