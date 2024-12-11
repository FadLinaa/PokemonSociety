import { connection } from "..";
import express, { Request, Response } from 'express';

export function getAlltype(req: Request, res: Response) {
    connection.query('SELECT * FROM types', (err: Error, results: any ) => {
        if (err) {
            console.error('Error');
            res.status(500).send('Error fetching users');
            return;
        }
        res.status(200).json(results);
    })
}

export default {getAlltype}
