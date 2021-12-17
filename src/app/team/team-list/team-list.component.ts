import { Component, OnInit } from '@angular/core';

import { Team, TeamService } from "../shared";
import { UserStorageService } from "../../shared";

import { userRolesEnum } from "../../config";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];
  public showCreateBtn: boolean = false;

  constructor(
    private teamService: TeamService,
    private userStorageService: UserStorageService
  ) { }

  ngOnInit(): void {
    this.teams = this.teamService.getAll();

    const response = this.userStorageService.getFromLocalStorage();
    if(!response) {
      return
    }
    this.showCreateBtn = response.role == userRolesEnum.ADMIN ? true : false;
  }

}
