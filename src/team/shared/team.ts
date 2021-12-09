import { Hero } from "../../heroes/shared";

let _id: number = 1;

export class Team {
  public id: number = _id;

  constructor(
    public name: string,
    public members?: Hero[] | []
  ) {
    _id++;
  }
}
