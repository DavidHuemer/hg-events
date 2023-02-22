import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() loadingText: string = "Daten werden geladen";

  constructor() {
  }

  ngOnInit(): void {
  }

}
