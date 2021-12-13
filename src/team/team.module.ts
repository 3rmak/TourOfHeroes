import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamLayoutComponent } from "./team-layout/team-layout.component";
import { TeamItemComponent } from './team-item/team-item.component';
import { TeamListComponent } from './team-list/team-list.component';
import { OpenModalDirective } from './team-item/open-modal.directive';

import { teamRoutes } from "./team.routes";
import { TeamService } from "./shared";
import { HeroesAddFormComponent } from './team-item/heroes-add-form/heroes-add-form.component';
import { RemoveHeroDirective } from './team-item/remove-hero.directive';

@NgModule({
  declarations: [
    TeamLayoutComponent,
    TeamItemComponent,
    TeamListComponent,
    TeamCreateComponent,
    OpenModalDirective,
    HeroesAddFormComponent,
    RemoveHeroDirective
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
