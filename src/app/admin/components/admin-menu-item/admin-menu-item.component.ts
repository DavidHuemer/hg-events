import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-menu-item',
  templateUrl: './admin-menu-item.component.html',
  styleUrls: ['./admin-menu-item.component.scss']
})
export class AdminMenuItemComponent implements OnInit {

  @Input() icon: string = "";
  @Input() title: string = "";
  @Input() link: string = "";

  @Input() expand: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
