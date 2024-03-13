import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connect from "./config/dbConnection";
import router from "./routes";
import validateEnv from "./utils/validateEnv";

dotenv.config();
validateEnv();

const port = process.env.PORT || 5000;
connect();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: false
}));
app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
})