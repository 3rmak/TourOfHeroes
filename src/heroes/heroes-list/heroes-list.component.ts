import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Hero, HeroService } from '../shared'

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit{
  public selectedHero : Hero | undefined;
  public heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  selectHero(userId: number) {
    this.selectedHero = this.heroes.find((item) => item.id === userId);
  }

  ngOnInit() {
    this.heroes = this.heroService.getAll();
  }

  gotoHero(selectedHeroId: number) {
    this.router.navigate(['hero', selectedHeroId]);
  }
}
