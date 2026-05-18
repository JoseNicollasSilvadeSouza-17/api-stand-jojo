import type IStand from "./IStand.js";

export type DTOStand = Omit<IStand, "id" | "img">;

export type DTOPartialStand = Partial<DTOStand>;