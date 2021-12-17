import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import {createTeamValidators, userRolesEnum} from '../../config'

import { TeamService } from "../shared";
import { Hero, HeroService } from "../../heroes/shared";
import {PreviousPageService, UserStorageService} from "../../shared";

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
    private heroService: HeroService,
    private userStorageService: UserStorageService,
    private router: Router,
    private previousPageService: PreviousPageService
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
    const userData = this.userStorageService.getFromLocalStorage();
    if (!userData || userData.role != userRolesEnum.ADMIN) {
      const url = this.previousPageService.getPreviousUrl();
      this.router.navigate([url]);
    }

    const all = this.heroService.getAll();
    const heroes = all.filter(hero => !hero.teamId);
    this.heroes = heroes;
  }
}
