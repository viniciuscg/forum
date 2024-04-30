import express from "express";
import { router } from "./routes";
const cors = require("cors");

declare module 'express-serve-static-core' {
    interface Request {
        task?: string
    }
}

const app = express()

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(express.json())
app.use(router)



export { app } 