import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URL, {
        dbName: "admin",
    }).then(() => {
        console.log("Connected successfully")
    }).catch((er) => {
        console.log(`DB connection error: ${er}`);
    })
}

export default conn