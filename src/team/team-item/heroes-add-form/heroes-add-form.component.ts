import { Component, Input, OnInit } from '@angular/core';

import { Hero, HeroService } from "../../../heroes/shared";
import { Team, TeamService } from "../../shared";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes-add-form',
  templateUrl: './heroes-add-form.component.html',
  styleUrls: ['./heroes-add-form.component.css']
})
export class HeroesAddFormComponent implements OnInit {
  @Input() team: Team | undefined;

  availableHeroes: Hero[] = [];
  selectedHeroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private teamService: TeamService,
    private router: Router
  ) { }

  isChecked(hero: Hero): boolean {
    return this.selectedHeroes.includes(hero);
  }

  onCheckboxChange(event: any, hero: Hero) {
    if (event.target.checked) {
      this.selectedHeroes.push(hero);
    } else {
      this.selectedHeroes.splice(this.selectedHeroes.indexOf(hero), 1);
    }
  }

  submitChanges() {
    if (!this.team) {
      alert('Unknown team');
      this.router.navigate(['team', 'list']);
      return;
    }

    this.team.members = this.selectedHeroes;
    const response = this.teamService.editTeam(this.team.id, { members: this.team.members });
    this.team.members.forEach(item => {
      // @ts-ignore
      this.heroService.updateTeamMembers(item.id, this.team.id);
    })
    if (!response) {
      alert('Error. Changes was not saved');
    }


  }

  ngOnInit(): void {
    const heroes = this.heroService.getAll();
    if (!this.team) {
      return;
    }

    this.availableHeroes = heroes.filter(item => !item.teamId);
    this.selectedHeroes = heroes.filter(item => item.teamId == this.team?.id);
    console.log('oninit', this.selectedHeroes);
  }

}
