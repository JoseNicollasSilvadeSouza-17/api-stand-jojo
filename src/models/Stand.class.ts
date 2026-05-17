import type { StandGraph } from "../types/StandTypes.js";
import type IStand from "../types/IStand.js";

export default class Stand {
  private id?: number | undefined;
  private name: string;
  private nameCopyright?: string | undefined;
  private graph: StandGraph;
  private skill?: string | undefined;
  private img?: string | undefined;
  private description?: string | undefined;
  private limitation?: string | undefined;
  private author?: string | undefined;

  constructor({
    id,
    name,
    nameCopyright,
    graph,
    skill,
    img,
    description,
    limitation,
    author
  }: IStand) {
    this.id = id;
    this.name = name;
    this.nameCopyright = nameCopyright;
    this.graph = graph;
    this.skill = skill;
    this.img = img;
    this.description = description;
    this.limitation = limitation;
    this.author = author;
  }
}
