import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loadable-container',
  templateUrl: './loadable-container.component.html',
  styleUrls: ['./loadable-container.component.scss']
})
export class LoadableContainerComponent implements OnInit {

  @Input() isLoading: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
