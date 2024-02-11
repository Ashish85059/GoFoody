const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://ashish123:ashish123@cluster0.qbap8ks.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB Connected");

        const db = mongoose.connection.db;
        // console.log("Database Name:", db.databaseName); // tells database name

        const collection = await db.collection("food_items");  
        // console.log("Collection Name:", collection.collectionName); // tells collection name
        
        
        const data = await collection.find({}).toArray();
        // console.log("Fetched Data:", data);
        global.food_items = data; // makes it global can be used anywere in the file

        const foodCategory = await db.collection("foodCategory");  
        const catData=await foodCategory.find({}).toArray();
        global.foodCategory=catData;

    } catch (err) {
        console.log("Error -> ", err);
    }
}

module.exports = mongoDB;
