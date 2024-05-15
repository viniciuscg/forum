import express from "express"
import { router } from "./routes"
import cors from "cors"
import bodyParser from 'body-parser'

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(router)

export { app } 