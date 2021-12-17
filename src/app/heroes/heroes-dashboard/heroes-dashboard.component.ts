import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Hero, HeroService } from '../shared'

@Component({
  selector: 'heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.css']
})
export class HeroesDashboardComponent implements OnInit{
  public heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  selectHero(userId: number) {
    this.router.navigate(['hero', userId]);
  }

  ngOnInit() {
    this.heroes = this.heroService.getAll();
  }
}
