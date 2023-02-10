import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuToggled() {
    this.showMenu = !this.showMenu;
  }
}
