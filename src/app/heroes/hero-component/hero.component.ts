import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Hero, HeroService } from "../shared";
import { PreviousPageService, UserStorageService } from "../../shared";
import {userRolesEnum} from "../../config";

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  id: number = 0;
  hero: Hero | undefined;
  hasAccess: boolean = false;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private previousPageService: PreviousPageService,
    private userStorageService: UserStorageService
  ) { };

  ngOnInit() {
    const response = this.userStorageService.getFromLocalStorage();
    if (response && response.role == userRolesEnum.ADMIN) {
      this.hasAccess = true;
    }

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
