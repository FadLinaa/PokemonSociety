import express, { Express } from "express";
const app: Express = express()
import {getAllegg_groups} from "../controller/controllereggroups"

app.get('/test', (req , res) => {
    getAllegg_groups(req, res);
});
export default app
