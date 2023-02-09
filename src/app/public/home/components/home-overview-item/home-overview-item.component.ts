import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-overview-item',
  templateUrl: './home-overview-item.component.html',
  styleUrls: ['./home-overview-item.component.scss']
})
export class HomeOverviewItemComponent implements OnInit {

  @Input() title: string = "Title";
  @Input() imageUrl: string = "";
  @Input() text: string = "Overview item text";
  @Input() link: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
