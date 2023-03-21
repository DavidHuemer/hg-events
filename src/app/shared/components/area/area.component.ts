import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  @Input() title: string = "Title";

  constructor() {
  }

  ngOnInit(): void {
  }

}
