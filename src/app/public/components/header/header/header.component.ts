import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.show = false;
    });
  }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }

}
