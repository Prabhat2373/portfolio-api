import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import contact from './controllers/userController.js';
import cors from "cors"
dotenv.config({
    path: './config.env'
})
const PORT = process.env.PORT || 8000;


const app = express();
mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true
}).then(() => console.log("DB IS CONNECTED!")).catch((err) => console.log(err.message))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello From server')
})
app.post('/contact', contact)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})