import { logger } from "./logger";
const dotenv = require("dotenv");
import express, { Express, Request, Response } from "express";

const app : Express = express()
dotenv.config();
const port = process.env.PORT;
import routetype from "./routes/routetype";
import routePokemon from "./routes/routePokemon";
import routeMoves from "./routes/routeMoves";
import routeeggroups from "./routes/routeeggroups";

const mysql = require('mysql2')

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "a",
    database: "pokemon"
})



connection.connect(function (err: any) {
    if (err) throw err
    console.log("connexion etablie")

})



app.get ('/', function(req: Request  , res: Response ) {
    res.send("Vous avez recuperer la route ");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use('/type', routetype)
app.use('/pokemon', routePokemon)
app.use('/moves', routeMoves)
app.use('/eggroups', routeeggroups)



logger.info(`Serveur démarré sur le port http://localhost:${port}`);
