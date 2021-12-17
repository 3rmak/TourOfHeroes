import { Routes } from "@angular/router";

import { HeroesDashboardComponent } from "./heroes-dashboard/heroes-dashboard.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";
import { HeroComponent } from "./hero-component/hero.component";
import { HeroesLayoutComponent } from "./heroes-layout/heroes-layout.component";

export const heroesRoutes: Routes = [
  { path: '', component: HeroesLayoutComponent, children: [
      { path: 'dashboard', component: HeroesDashboardComponent },
      { path: 'list', component: HeroesListComponent },
      { path: 'hero/:userId', component: HeroComponent },
    ]
  }
];
