import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HeroesAddFormComponent } from './team-item/heroes-add-form/heroes-add-form.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamHeroesListComponent } from './team-item/team-heroes-list/team-heroes-list.component';
import { TeamLayoutComponent } from "./team-layout/team-layout.component";
import { TeamListComponent } from './team-list/team-list.component';
import { TeamItemComponent } from './team-item/team-item.component';

import { teamRoutes } from "./team.routes";
import { TeamService } from "./shared";
import { CheckUserPermissionDirective } from './team-item/check-user-permission.directive';
import { OpenModalDirective } from './team-item/open-modal.directive';
import { RemoveHeroDirective } from './team-item/remove-hero.directive';

@NgModule({
  declarations: [
    TeamLayoutComponent,
    TeamItemComponent,
    TeamListComponent,
    TeamCreateComponent,
    OpenModalDirective,
    HeroesAddFormComponent,
    RemoveHeroDirective,
    TeamHeroesListComponent,
    CheckUserPermissionDirective
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
