import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        console.log("Connecting to database...")
        await mongoose.connect(process.env.MONGO_URI, 
            {
                dbName: "TechGenius"
            }
        );
       console.log("Database connected succesfully");
    }catch (error){
        console.log("Error connecting to database: ", error)
        procees.exit(1);
    }
}