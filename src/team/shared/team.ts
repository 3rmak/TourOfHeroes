import { Hero } from "../../heroes/shared";

let _id: number = 1;

export interface ITeam {
  name?: string,
  members?: Hero[]
}

export class Team implements ITeam {
  public id: number = _id;

  constructor(
    public name: string,
    public members?: Hero[] | []
  ) {
    _id++;
  }
}
