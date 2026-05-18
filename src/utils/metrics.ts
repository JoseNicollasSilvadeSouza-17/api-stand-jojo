import type { Request, Response, NextFunction } from "express";
import client from "prom-client";

const registry = client.register;

client.collectDefaultMetrics({
  register: registry,
  prefix: "STAND_"
});

async function promMetrics(req: Request, res: Response) {
  res.setHeader("Content-Type", registry.contentType);

  const metrics = await registry.metrics();

  return res.send(metrics);
}

export default promMetrics;
