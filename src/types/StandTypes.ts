type GraphStatus = "Infinito" | "A" | "B" | "C" | "D" | "E" | "Nulo";

export type StandGraph = {
  power: GraphStatus,
  speed: GraphStatus,
  range: GraphStatus,
  durability: GraphStatus,
  precision: GraphStatus,
  potential: GraphStatus
}