import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-table',
  templateUrl: './scroll-table.component.html',
  styleUrls: ['./scroll-table.component.scss']
})
export class ScrollTableComponent implements OnInit {

  @Input() headers: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
