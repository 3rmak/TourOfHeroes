import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamLayoutComponent } from "./team-layout/team-layout.component";
import { TeamItemComponent } from './team-item/team-item.component';
import { TeamListComponent } from './team-list/team-list.component';

import { teamRoutes } from "./team.routes";
import { TeamService } from "./shared";

@NgModule({
  declarations: [
    TeamLayoutComponent,
    TeamItemComponent,
    TeamListComponent,
    TeamCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(teamRoutes)
  ],
  providers: [TeamService],
  exports: [RouterModule]
})
export class TeamModule {}
