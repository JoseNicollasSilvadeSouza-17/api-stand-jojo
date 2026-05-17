import express, {
  type Application,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import morgan from "morgan";
import helmet from "helmet";
import router from "./routes/stand.routes.js";

const app: Application = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(express.json());

app.use("/stand", router);

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.sendStatus(500);
});

export default app;