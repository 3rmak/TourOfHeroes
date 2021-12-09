import {Routes} from "@angular/router";

import { TeamLayoutComponent } from "./team-layout/team-layout.component";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamItemComponent } from "./team-item/team-item.component";
import { TeamCreateComponent } from "./team-create/team-create.component";

export const teamRoutes: Routes = [
  { path: 'team', component: TeamLayoutComponent, children: [
      { path: 'list', component: TeamListComponent },
      { path: 'create', component: TeamCreateComponent },
      { path: ':teamId', component: TeamItemComponent }
    ]}
]
