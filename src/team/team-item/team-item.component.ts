import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Team, TeamService } from '../shared';
import { Hero, HeroService } from "../../heroes/shared";

import { PreviousPageService } from "../../shared";

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  showModal: boolean = false;
  team: Team | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private previousPageService: PreviousPageService,
    private heroService: HeroService,
    private teamService: TeamService
  ) { }

  addHeroModal() {
    this.showModal = !this.showModal;
  }

  // removeHero(hero: Hero) {
  //   const confirmResponse = window.confirm('Are you sure to delete hero from team?');
  //   if(!confirmResponse || !this.team) {
  //     return;
  //   }
  //
  //   const index = this.team.members?.findIndex((item)=>item.id == hero.id);
  //   console.log(index)
  //   if (index == undefined || index < 0) {
  //     return;
  //   }
  //   this.team.members?.splice(index, 1);
  //   console.log(this.team.members)
  //
  //   this.teamService.editTeam(this.team.id, { members: this.team.members });
  //   this.heroService.updateTeamMembers(hero.id, undefined);
  // }

  ngOnInit(): void {
    let teamId: number = 0;
    this.activatedRoute.params.subscribe(params => teamId = params['teamId']);

    const team = this.teamService.getById(teamId);
    if (!team) {
      alert('Wrong team ID selected');
      this.router.navigate(['team', 'list']);
      return;
    }

    this.team = team;
  }

}
