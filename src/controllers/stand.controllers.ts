import type { Request, Response, NextFunction } from "express";
import Stand from "../models/Stand.class.js";
import StandRepository from "../repositories/stand.repositories.js";

const standRepository = new StandRepository();

export default class StandControllers {
  async index(req: Request, res: Response): Promise<void> {
    const stands = await standRepository.getStands();

    if (!stands) {
      res.sendStatus(404);
    }

    res.json(stands);
  }

  async getStand(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const stand = await standRepository.getStand(id);

    if (!stand) {
      res.sendStatus(404);
    }
    res.json(stand);
  }

  async postStand(req: Request, res: Response) {
    const stand = req.body as Stand;
    const result = await standRepository.addStand(stand);

    if (!result) {
      res.sendStatus(404);
    }

    res.status(201).json(result);
  }
}
