import express, { Express } from "express";
const app: Express = express()
import {getAllMoves} from "../controller/controllerMoves"

app.get('/test', (req , res) => {
    getAllMoves(req, res);
});
export default app
