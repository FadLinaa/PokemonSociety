import { connection } from "..";
import express, { Request, Response } from 'express';
import { pokemon } from "../Modele/modele";

export function getAllPokemon(req: Request, res: Response) {
    connection.query('SELECT * FROM pokemon', (err: Error, results: pokemon) => {
        if (err) {
            console.error('Error');
            res.status(500).send('Error fetching users');
            return;
        }
        res.status(200).json(results);
    })
}

export function getAllpokemonId(req: Request, res: Response) {
    let valeur = req.params.id;
    connection.query(`SELECT * FROM pokemon WHERE id=${valeur}`, (err: Error, results: any) => {
        if (err) {
            console.error('Error');
            res.status(500).send('Error fetching users');
            return;
        }
        res.status(200).json(results);
    })
}
export function getAllpokemon_moves(req: Request, res: Response) {
    connection.query(` SELECT * FROM moves
        INNER JOIN pokemon_moves ON moves.id=pokemon_moves.move_id
        INNER JOIN pokemon ON pokemon.id=pokemon_moves.pokemon_id
        WHERE pokemon.id=${req.params.id}`, (err: Error, results: any) => {
        if (err) {
            console.error('Error');
            res.status(500).send('Error fetching users');
            return;
        }
        res.status(200).json(results);
    })
}

export function getAllpokemon_type(req: Request, res: Response) {
    connection.query(` SELECT * FROM types
        INNER JOIN pokemon_types ON types.id=pokemon_types.type_id
        INNER JOIN pokemon ON pokemon.id=pokemon_types.pokemon_id
        WHERE types.id=${req.params.id}`, (err: Error, results: any) => {
        if (err) {
            console.error('Error');
            res.status(500).send('Error fetching users');
            return;
        }
        res.status(200).json(results);
    })
}
export function getAllpokemon_egg(req: Request, res: Response) {
    connection.query(` SELECT * FROM egg_groups
        INNER JOIN pokemon_egg_groups ON egg_groups.id =pokemon_egg_groups.egg_group_id
        INNER JOIN pokemon ON pokemon.id=pokemon_egg_groups.egg_group_id
        WHERE egg_groups.id=${req.params.id}`, (err: Error, results: any) => {
        if (err) {
            console.error('Error');
            res.status(500).send(err);
            return;
        }
        res.status(200).json(results);
    })
}


