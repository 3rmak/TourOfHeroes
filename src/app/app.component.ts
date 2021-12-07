import { Component } from '@angular/core';
import { PreviousPageService } from "../shared";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  constructor(private previousPageService: PreviousPageService) {
    previousPageService.start();
  }
}
