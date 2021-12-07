import { Injectable } from "@angular/core";

import { Hero } from '../shared';

const heroesList = [
  new Hero(1, 'Paul'),
  new Hero(2, 'Corey'),
  new Hero(3, 'Shawn'),
  new Hero(4, 'Chris'),
  new Hero(5, 'Mick'),
  new Hero(6, 'Sid'),
  new Hero(7, 'James'),
  new Hero(8, 'Joey'),
]

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

}
