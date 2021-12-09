import { Injectable } from "@angular/core";

import { Hero, heroesList } from '../shared';

@Injectable()
export class HeroService {
  private heroes: Hero[] = heroesList;

  getAll() : Hero[] {
    return this.heroes;
  }

  getById(heroId: number): Hero | undefined {
    const hero = this.heroes.find(item => item.id == heroId);
    return hero;
  }

  post(hero: Hero) {
    this.heroes.push(hero);
  }

  updateTeamStatus(heroId: number, teamId: number) : boolean {
    const heroIndex = this.heroes.findIndex(item => item.id == heroId);
    if (heroIndex < 0) {
      return false;
    }

    this.heroes[heroIndex].teamId = teamId;
    return true;
  }


}
