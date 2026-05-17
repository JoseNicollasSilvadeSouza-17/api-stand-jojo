import { Router } from "express";
import StandControllers from "../controllers/stand.controllers.js";

const router: Router = Router();
const standControllers = new StandControllers();

router.get("/stands", standControllers.index);

router.get("/:id", standControllers.getStand);

router.post("/", standControllers.postStand);

export default router;