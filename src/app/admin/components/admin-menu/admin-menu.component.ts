import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  @Input() showMenu: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("auth/sign-in");
    });
  }
}
