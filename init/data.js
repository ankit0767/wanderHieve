const sampleListings = [
    {
      title: "Mountain Retreat",
      description:
        "Enjoy breathtaking views and peaceful surroundings in this cozy mountain cabin.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
      },
      price: 1800,
      location: "Aspen",
      country: "United States"
    },
    {
      title: "Luxury Villa in Bali",
      description:
        "Indulge in luxury at this modern villa with a private pool and tropical vibes.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
      },
      price: 3000,
      location: "Bali",
      country: "Indonesia"
    },
    {
      title: "Charming Countryside Cottage",
      description:
        "Relax and unwind in this beautiful countryside escape with lush green views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1600585154084-5c3b6b9d1b42"
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom"
    },
    {
      title: "Beachside Paradise",
      description:
        "Experience the ultimate beach vacation at this oceanfront paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
      },
      price: 2500,
      location: "Malibu",
      country: "United States"
    },
    {
      title: "Rustic Cabin in the Woods",
      description:
        "Reconnect with nature in this cozy and charming rustic cabin surrounded by trees.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98"
      },
      price: 1100,
      location: "Vancouver",
      country: "Canada"
    },
    {
      title: "Modern Penthouse in Dubai",
      description:
        "Stay in style with panoramic views of the city skyline from this luxury penthouse.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1600607680349-e370923cef25"
      },
      price: 5000,
      location: "Dubai",
      country: "UAE"
    },
    {
      title: "Secluded Jungle Hideaway",
      description:
        "Get lost in nature with this hidden gem located in the heart of the jungle.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1590490360183-9672f2a7e0c0"
      },
      price: 1500,
      location: "Ubud",
      country: "Indonesia"
    },
    {
      title: "Historic Mansion in Paris",
      description:
        "Live like royalty in this classic Parisian mansion with rich history.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1592595896551-12b221bcdc4e"
      },
      price: 4500,
      location: "Paris",
      country: "France"
    },
    {
      title: "Serene Lake House",
      description:
        "Relax by the lake in this peaceful house with stunning waterfront views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
      },
      price: 1900,
      location: "Lake Tahoe",
      country: "United States"
    },
    {
      title: "Scandinavian Minimalist Home",
      description:
        "Experience the simplicity of Scandinavian design with this modern minimalist home.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1560184897-9d6239e1f1dc"
      },
      price: 3200,
      location: "Copenhagen",
      country: "Denmark"
    },
    {
      title: "Tropical Treehouse Retreat",
      description:
        "Live among the treetops in this cozy and secluded tropical treehouse.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521702815719-7547fae9f647"
      },
      price: 1400,
      location: "Costa Rica",
      country: "Costa Rica"
    },
    {
      title: "Stylish Loft in New York",
      description:
        "Enjoy city life in this trendy and stylish loft located in the heart of NYC.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
      },
      price: 4000,
      location: "New York",
      country: "United States"
    },
    {
      title: "Private Island Getaway",
      description:
        "Escape from the world in this exclusive private island with crystal-clear waters.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      },
      price: 10000,
      location: "Maldives",
      country: "Maldives"
    },
    {
      title: "Chic Apartment in Tokyo",
      description:
        "Immerse yourself in the vibrant culture of Tokyo with this centrally located apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653"
      },
      price: 2700,
      location: "Tokyo",
      country: "Japan"
    },
    {
      title: "Farmhouse in Tuscany",
      description:
        "Experience the charm of the Italian countryside in this rustic farmhouse.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1560185009-b035e2f36cdb"
      },
      price: 2200,
      location: "Tuscany",
      country: "Italy"
    },
    {
      title: "Mediterranean Villa with Infinity Pool",
      description:
        "Soak in breathtaking sunsets from this luxurious villa overlooking the sea.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
      },
      price: 5200,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Elegant Castle in Scotland",
      description:
        "Step back in time with this majestic castle that offers a glimpse into history.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585079541708-3bddd727c937"
      },
      price: 6000,
      location: "Edinburgh",
      country: "Scotland"
    },
    {
      title: "Bohemian Bungalow in Goa",
      description:
        "Experience laid-back vibes in this bohemian-style bungalow near the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1600585154084-5c3b6b9d1b42"
      },
      price: 1500,
      location: "Goa",
      country: "India"
    },
    {
      title: "Tropical Treehouse Retreat",
      description:
        "Live among the treetops in this cozy and secluded tropical treehouse.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521702815719-7547fae9f647",
      },
      price: 1400,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Oceanfront Luxury Villa",
      description:
        "Relax by the beach and enjoy the sunset from this stunning oceanfront villa.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1590490360183-44c94d66c8b0",
      },
      price: 5000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Cozy Mountain Chalet",
      description:
        "Enjoy breathtaking mountain views from this comfortable and well-equipped chalet.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1610652866436-d430f838cd6c",
      },
      price: 2800,
      location: "Swiss Alps",
      country: "Switzerland",
    },
    {
      title: "Desert Adventure Camp",
      description:
        "Experience the beauty of the desert while camping under the stars.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1528642474494-cf1b352ad11e",
      },
      price: 1200,
      location: "Dubai",
      country: "UAE",
    },
    {
      title: "Serene Lakeside Cabin",
      description:
        "Unwind in a peaceful lakeside cabin surrounded by nature and tranquility.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1568316939521-611b2051fc38",
      },
      price: 2200,
      location: "Lake Tahoe",
      country: "USA",
    },
    {
      title: "Traditional Japanese Ryokan",
      description:
        "Immerse yourself in Japanese culture and hospitality at this authentic ryokan.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1580674704327-59b60094c9b1",
      },
      price: 3500,
      location: "Kyoto",
      country: "Japan",
    },
    {
      title: "Modern Urban Loft",
      description:
        "Explore the city from this stylish and centrally located urban loft.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1609520497038-351b4c6e3b58",
      },
      price: 3000,
      location: "New York",
      country: "USA",
    },
    {
      title: "Safari Lodge with Wildlife Views",
      description:
        "Experience thrilling safari adventures while staying at this luxurious lodge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1543157145-f78cb99f36ce",
      },
      price: 4500,
      location: "Serengeti",
      country: "Tanzania",
    },
    {
      title: "Charming Countryside Cottage",
      description:
        "Escape the hustle and bustle in this charming countryside retreat.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521499794798-4581a1eafc66",
      },
      price: 1800,
      location: "Cotswolds",
      country: "UK",
    },
    {
      title: "Luxury Yacht Stay",
      description:
        "Indulge in a unique stay aboard a luxury yacht with panoramic ocean views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
      },
      price: 8000,
      location: "Monaco",
      country: "Monaco",
    },
    {
      title: "Scandinavian Glass Igloo",
      description:
        "Witness the northern lights from the comfort of a cozy glass igloo.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1549366021-9f761d450615",
      },
      price: 4000,
      location: "Lapland",
      country: "Finland",
    },
    {
      title: "Eco-Friendly Bamboo Hut",
      description:
        "Stay close to nature in this eco-friendly bamboo hut surrounded by greenery.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1576183853043-d6c60d98d408",
      },
      price: 1500,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mediterranean Beach Villa",
      description:
        "Relax and soak up the sun at this luxurious Mediterranean beach villa.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1563057745-007a4fa293c3",
      },
      price: 5500,
      location: "Santorini",
      country: "Greece",
    },
    {
      title: "Secluded Forest Cabin",
      description:
        "Get away from it all in this secluded and peaceful forest cabin.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1508163059593-4a30813c4f77",
      },
      price: 2000,
      location: "Vancouver Island",
      country: "Canada",
    },
    {
      title: "Historic Castle Stay",
      description:
        "Live like royalty in this restored medieval castle with modern comforts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1572649512864-3b706999b08b",
      },
      price: 7000,
      location: "Edinburgh",
      country: "Scotland",
    },
  ];
  


module.exports = { data: sampleListings };