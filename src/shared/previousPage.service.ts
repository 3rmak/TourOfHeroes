import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Injectable()
export class PreviousPageService {
  private previousPageUrl: string = '';
  private currentPageUrl: string;


  constructor(private router: Router) {
    this.currentPageUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousPageUrl = this.currentPageUrl;
        this.currentPageUrl = event.url;
      }
    })
  }

  getPreviousUrl():string {
    return this.previousPageUrl
  }

  start() { }
}
