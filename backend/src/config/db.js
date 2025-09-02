import mongoose from "mongoose";

//connect to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("Error Connecting to MONGODB",error);
        process.exit(1); //exit with failure
    }
}  