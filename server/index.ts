import mongoose from "mongoose"

const MONGO_URL = process.env.MONGO_URL as string

export default async () =>
{
    try
    {
        console.log(MONGO_URL)
        mongoose.set("strictQuery", true)
        await mongoose.connect(MONGO_URL)
        console.log("DB connection established.")
    }
    catch (err)
    { console.error("DB connection failed.", err) }
};