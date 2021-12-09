import { Component, OnInit } from '@angular/core';

import { Team, TeamService } from "../shared";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teams = this.teamService.getAll();
  }

}
