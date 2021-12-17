import { Injectable } from '@angular/core';

import { Hero } from "../../heroes/shared";
import { ITeam, Team } from "./team";

const teamList: Team[] = [
  new Team('Slipknot'),
  new Team('Abba')
]

@Injectable()
export class TeamService {
  private teams: Team[] = teamList;
  constructor(
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

  editTeam(teamId: number, body: ITeam): boolean {
    const teamIndex = this.teams.findIndex((item) => item.id == teamId);
    if (teamIndex < 0) {
      return false;
    }

    const bodyEntries = Object.entries(body);
    bodyEntries.forEach(([key, value]) => {
      // @ts-ignore
      this.teams[teamIndex][key] = value;
    })
    return true;
  }
}
