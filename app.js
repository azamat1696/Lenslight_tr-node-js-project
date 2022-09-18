import express from "express"
import dotenv from "dotenv"
import conn from "./DataBase.js"
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";
// dotenv set config for accessing .env
dotenv.config();

// connection to db
conn();

const  app = express();
const PORT = process.env.PORT || 5000
// ejs template engine
app.set('view engine','ejs')

// static files middleware
app.use(express.static('public'));
app.use(express.json());
// Routes
app.use("/",pageRoute)
app.use("/photos",photoRoute)

app.listen(PORT,() => {
    console.log(`Server is Running on port: http://localhost:${PORT}`)
})