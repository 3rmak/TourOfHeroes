import { Injectable } from '@angular/core';

import { Hero, HeroService } from "../../heroes/shared";
import { Team } from "./team";

const teamList: Team[] = [
  new Team('Slipknot', [
    new Hero(1, 'Paul'),
    new Hero(2, 'Corey'),
    new Hero(3, 'Shawn'),
    new Hero(4, 'Chris')
  ])
]

interface TeamRequest {
  id?: number,
  name?: string
}

@Injectable()
export class TeamService {
  private teams: Team[] = teamList;
  constructor(
    private heroService: HeroService
  ) { }

  getAll(): Team[] {
    return this.teams;
  }

  getById(teamId: number): Team | undefined {
    const team = this.teams.find((item) => item.id == teamId);
    return team;
  }

  createTeam(name: string, members?: Hero[]): Team | undefined {
    const teamWithName = this.teams.find((item) => item.name == name);
    if (teamWithName) {
      return undefined;
    }

    this.teams.push(new Team(name, members));
    const newTeam = this.teams.find((item) => item.name == name);
    if (!newTeam) {
      return undefined;
    }
    return newTeam;
  }
}
