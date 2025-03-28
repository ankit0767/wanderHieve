if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

console.log(process.env) ;

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");  
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const { listingSchema } = require("./schema.js");

const session= require("express-session");
const MongoStore = require('connect-mongo');
const flash= require("connect-flash");
const passport= require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const userRouter = require("./routes/user.js");
const reviewRouter = require("./routes/review.js");




const app = express();
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl=process.env.ATLASDB_URL;

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
    }
}
main();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store= MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,

    },
    touchAfter: 24*3600,
});
store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE",err);
});


const sessionOption={
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly:true,
    },


};
// Root route
// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });




app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
    console.log("Current User:", req.user);
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    
    next();
});

// Middleware to validate listings
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// router.get("/search", wrapAsync(async (req, res) => {
//     const { query } = req.query;
//     let listings;

//     if (query) {
//         listings = await Listing.find({
//             $or: [
//                 { country: { $regex: query, $options: "i" } },
//                 { location: { $regex: query, $options: "i" } }
//             ]
//         });
//     } else {
//         listings = await Listing.find({});
//     }

//     res.render("listings/index.ejs", { allListings: listings });
// }));

// app.get("/demouser", async(req,res)=>{
//     let fakeuser= new User({
//         email:"student@gmail.com",
//         username: "ankit",
//     });
//     let registeredUser = await User.register(fakeuser,"helloword");
//     res.send(registeredUser);
// })


// Use Routes
// Correct order in app.js
app.use("/", userRouter);         // Correct place for userRouter
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

// Error Handling
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    console.log("Error Occurred:", err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).render("error.ejs", { message });
});

// Start Server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
