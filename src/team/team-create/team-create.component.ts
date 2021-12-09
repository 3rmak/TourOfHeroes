import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

import {Team, TeamService} from "../shared";
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
    "name": new FormControl(),
    "members": new FormControl()
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
      this.heroService.updateTeamStatus(member.id, createdTeam.id);
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
    console.log('all teams', this.teamService.getAll());

    const all = this.heroService.getAll();
    console.log('all heroes', all)

    const heroes = all.filter(hero => !hero.teamId);

    this.heroes = heroes;
  }
}
