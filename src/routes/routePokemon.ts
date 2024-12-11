import express, { Express, Request, Response } from "express";
const app: Express = express()
import {getAllPokemon} from "../controller/controllerPokemon"
import {getAllpokemonId} from "../controller/controllerPokemon"
import {getAllpokemon_moves} from "../controller/controllerPokemon"
import { getAllpokemon_type} from "../controller/controllerPokemon"
import { getAllpokemon_egg} from "../controller/controllerPokemon"

app.get('/pokemon', (req :Request, res: Response) => {
    getAllPokemon(req, res);
});

app.get('/getAllpokemon_moves/:id', function (req :Request, res: Response) {
    getAllpokemon_moves(req, res);
});

app.get('/getAllpokemon_type/:id', function (req :Request, res: Response) {
    getAllpokemon_type(req, res);
});

app.get('/getAllpokemon_egg/:id', function (req :Request, res: Response) {
    getAllpokemon_egg(req, res);
});

app.get('/pokemon/:id', function (req :Request, res: Response) {
    getAllpokemonId( req, res)
});

export default app
