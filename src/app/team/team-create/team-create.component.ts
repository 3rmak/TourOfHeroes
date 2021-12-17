import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { createTeamValidators } from '../../config'

import { TeamService } from "../shared";
import { Hero, HeroService } from "../../heroes/shared";

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  heroes: Hero[] = [];
  teamMembers: Hero[] = [];

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private heroService: HeroService
  ) { }

  teamForm: FormGroup = this.fb.group({
    "name": new FormControl('', [
      Validators.minLength(createTeamValidators.TEAM_NAME_MIN_LEN),
      Validators.maxLength(createTeamValidators.TEAM_NAME_MAX_LEN),
      Validators.required
    ]),
    "members": new FormControl([])
  } )

  createHeroTeam() {
    this.teamForm.value.members = this.teamMembers;

    const { name, members } = this.teamForm.value
    const createdTeam = this.teamService.createTeam(name, members);
    if (!createdTeam) {
      alert('Error. Team was not created. Players is not added');
      return;
    }
    members.forEach((member: Hero) => {
      this.heroService.updateTeamMembers(member.id, createdTeam.id);
    })

    alert('Success');
  }

  onCheckboxChange(event: any, hero: Hero) {
    if (event.target.checked) {
      this.teamMembers.push(hero);
    } else {
      this.teamMembers.splice(this.teamMembers.indexOf(hero), 1);
    }
  }

  ngOnInit() {
    const all = this.heroService.getAll();
    const heroes = all.filter(hero => !hero.teamId);
    this.heroes = heroes;
  }
}
