import {Component, Input, OnInit} from '@angular/core';

export enum LoadableContainerStatus{
  LOADING,
  EMPTY,
  SHOWING
}

@Component({
  selector: 'app-loadable-list',
  templateUrl: './loadable-list.component.html',
  styleUrls: ['./loadable-list.component.scss']
})
export class LoadableListComponent implements OnInit {

  @Input() status: LoadableContainerStatus = LoadableContainerStatus.LOADING;

  e = LoadableContainerStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
