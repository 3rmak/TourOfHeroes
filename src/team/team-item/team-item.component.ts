import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Team, TeamService } from '../shared'
import {PreviousPageService} from "../../shared";

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  team: Team | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private previousPageService: PreviousPageService,
    private teamService: TeamService
  ) { }

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
