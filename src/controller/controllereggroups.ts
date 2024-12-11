import { connection } from "..";
import express, { Request, Response } from 'express';


export function getAllegg_groups(req: Request, res: Response) {
    connection.query('SELECT * FROM egg_groups', (err: Error, results: any ) => {
        if (err) {
            console.error('Error');
            res.status(500).send('Error fetching users');
            return;
        }
        res.status(200).json(results);
    })
}
