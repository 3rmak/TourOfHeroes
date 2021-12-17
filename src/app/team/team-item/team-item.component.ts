import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Team, TeamService } from '../shared';

import { PreviousPageService, UserStorageService } from "../../shared";
import {userRolesEnum} from "../../config";

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  accessToEdit: boolean = false;
  showModal: boolean = false;
  team: Team | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private previousPageService: PreviousPageService,
    private teamService: TeamService,
    private userStorageService: UserStorageService
  ) { }

  addHeroModal() {
    if (!this.accessToEdit) {
      alert('You have no such permission to edit team');
      return;
    }

    this.showModal = !this.showModal;
  }

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

    const userData = this.userStorageService.getFromLocalStorage();
    if (!userData || userData.role != userRolesEnum.ADMIN) {
      return;
    }

    this.accessToEdit = true;
  }

}
