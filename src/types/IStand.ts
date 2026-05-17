import type { StandGraph } from "./StandTypes.js";

export default interface IStand {
  id?: number;
  name: string;
  nameCopyright?: string;
  graph: StandGraph;
  skill?: string;
  img?: string;
  description?: string;
  limitation?: string;
  author?: string;
}
