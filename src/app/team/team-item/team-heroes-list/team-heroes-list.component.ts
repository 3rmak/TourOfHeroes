import { Component, Input, OnInit } from '@angular/core';

import { Team, TeamService } from "../../shared";
import { Hero, HeroService } from "../../../heroes/shared";

@Component({
  selector: 'app-team-heroes-list',
  templateUrl: './team-heroes-list.component.html',
  styleUrls: ['./team-heroes-list.component.css']
})
export class TeamHeroesListComponent implements OnInit {
  @Input() team: Team | undefined;
  @Input() accessToEdit: boolean = false;

  constructor(
    private teamService: TeamService,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
  }

  removeHero(hero: Hero) {
    if (!this.accessToEdit) {
      alert('You have no such permission to edit team');
      return;
    }

    const confirmResponse = window.confirm('Are you sure to delete hero from team?');
    if(!confirmResponse || !this.team) {
      return;
    }

    const index = this.team.members?.findIndex((item)=>item.id == hero.id);
    console.log(index)
    if (index == undefined || index < 0) {
      return;
    }
    this.team.members?.splice(index, 1);
    console.log(this.team.members)

    this.teamService.editTeam(this.team.id, { members: this.team.members });
    this.heroService.updateTeamMembers(hero.id, undefined);
  }
}
