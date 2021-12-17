import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HeroesLayoutComponent } from "./heroes-layout/heroes-layout.component"
import { HeroesDashboardComponent } from "./heroes-dashboard/heroes-dashboard.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";
import { HeroComponent } from "./hero-component/hero.component";

import { HeroService } from './shared'

import { heroesRoutes } from "./heroes.routes";


@NgModule({
  declarations: [
    HeroesLayoutComponent,
    HeroesDashboardComponent,
    HeroesListComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [HeroService]
})
export class HeroesModule {

}
