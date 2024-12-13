const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://gofood:neha123@cluster0.38e0r.mongodb.net/gofoofmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();

    const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray();

    global.food_items = fetched_data;
    global.foodCategory = foodCategory;
  } catch (err) {
    console.log("Error connecting to MongoDB", err);
  }
};

mongoDB();
