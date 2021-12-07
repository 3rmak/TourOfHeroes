import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Hero, HeroService } from "../shared";
import { PreviousPageService } from "../../shared";

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  id: number = 0;
  hero: Hero | undefined;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private previousPageService: PreviousPageService
  ) { };

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>this.id=params['userId']);

    const hero = this.heroService.getById(this.id);

    if (!hero) {
      this.router.navigate(['not-found']);
    }
    this.hero = hero;
  }

  goBack() {
    const prevUrl = this.previousPageService.getPreviousUrl();
    this.router.navigate([prevUrl]);
  }

}
