import { connection } from "..";
import express, { Request, Response } from 'express';


export function getAllMoves(req: Request, res: Response) {
    connection.query('SELECT * FROM moves', (err: Error, results: any ) => {
        if (err) {
            console.error('Error');
            res.status(500).send('Error fetching users');
            return;
        }
        res.status(200).json(results);
    })
}

export default {getAllMoves}
