import {Directive, OnInit } from '@angular/core';
import { ElementRef, Renderer2 } from "@angular/core";

import { UserStorageService } from "../../shared";
import {userRolesEnum} from "../../config";

@Directive({
  selector: '[appCheckUserPermission]'
})
export class CheckUserPermissionDirective implements OnInit{

  constructor(
    private userStorageService: UserStorageService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const userData = this.userStorageService.getFromLocalStorage();
    if (!userData || userData.role != userRolesEnum.ADMIN) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'true');
    }
  }

}
