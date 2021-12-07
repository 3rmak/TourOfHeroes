import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { HeroesModule } from '../heroes/heroes.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { NotFoundComponent } from "../not-found/not-found.component";

import { appRoutes } from "./app.routes";

import { PreviousPageService, UserStorageService } from "../shared";
import { UserService } from "../auth/shared";

import { AuthModule } from "../auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HeroesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PreviousPageService,
    UserService,
    UserStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
