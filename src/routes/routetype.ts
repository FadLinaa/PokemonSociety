import express, { Express } from "express";
const app: Express = express()
import {getAlltype} from "../controller/controllertype"

app.get('/type', (req , res) => {
    getAlltype(req, res);
});
export default app
