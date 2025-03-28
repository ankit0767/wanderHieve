const Listing= require("../models/listing");
 const Review = require('../models/review'); 

module.exports.index=async(req,res)=>{
    const allListings= await Listing.find({});
    res.render("listings/index.ejs",{allListings});

};

module.exports.renderNewForm = (req,res) =>{ 
    res.render("listings/new.ejs");
};

module.exports.showListing=async (req,res)=> {
    let {id}=req.params;
    const listing=await Listing.findById(id).populate({path:"reviews",populate:{ path: "author",}}).populate("owner");
    if(!listing){
    req.flash("error", "Listing you are requested for does not exist!");
    res.redirect("/listings");

    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});

};

module.exports.createListing=async (req,res, next)=>{
    let url=req.file.path;
    let filename=req.filename;


    const newListing = new Listing(req.body.listing);

   
    newListing.owner=req.user._id;
    newListing.image={url,filename};
   
    await newListing.save();

    req.flash("success", "New Listing Created!")
    res.redirect("/listings");

};

module.exports.renderEditForm=async (req,res) =>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you are requested for does not exist!");
        res.redirect("/listings");
    
        }
    res.render("listings/edit.ejs",{listing});
    

};

module.exports.updateListing= async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !== "undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }
    req.flash("success", "Listing Updated!")
    res.redirect("/listings");
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;

    // Find the listing and populate the reviews
    const listing = await Listing.findById(id).populate("reviews");

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    // Delete associated reviews if they exist
    if (listing.reviews.length) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }

    // Delete the listing
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing and associated reviews deleted!");
    res.redirect("/listings");
};