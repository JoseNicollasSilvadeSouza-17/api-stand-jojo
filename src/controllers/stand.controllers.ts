import type { Request, Response, NextFunction } from "express";
import StandRepository from "../repositories/stand.repositories.js";

const standRepository = new StandRepository();

export default class StandControllers {
  async all(req: Request, res: Response) {
    const stands = await standRepository.getStands();

    if (!stands) {
      return res.sendStatus(404);
    }

    return res.json(stands);
  }

  async getStand(req: Request, res: Response) {
    const id = Number(req.params.id);
    const stand = await standRepository.getStand(id);

    if (!stand) {
      return res.sendStatus(404);
    }
    return res.json(stand);
  }

  async getStandCount(req: Request, res: Response) {
    const count = await standRepository.getStandCount();

    if (!count) res.sendStatus(404);

    return res.status(200).json({ count });
  }

  async postStand(req: Request, res: Response) {
    const stand = req.body;
    const result = await standRepository.addStand(stand);

    if (!result) {
      res.sendStatus(404);
    }

    res.status(201).json(result);
  }

  async postUploadImage(req: Request, res: Response) {
    const id = Number(req.params.id);
    const file = req.file;

    if (!file) return res.sendStatus(400);

    const img = await standRepository.uploadImage(id, file);

    return res.status(200).json(img);
  }

  async putStand(req: Request, res: Response) {
    const id = Number(req.params.id);
    const standData = req.body;
    const result = await standRepository.replaceStand(id, standData);

    if (!result) res.sendStatus(404);

    res.status(201).json(result);
  }

  async patchStand(req: Request, res: Response) {
    const id = Number(req.params.id);
    const standData = req.body;
    const result = await standRepository.updateStand(id, standData);

    if (!result) res.sendStatus(404);

    res.status(201).json(result);
  }

  async deleteStand(req: Request, res: Response) {
    const id = Number(req.params.id);
    const result = await standRepository.deleteStand(id);

    if (!result) res.sendStatus(404);

    res.sendStatus(204);
  }
}
