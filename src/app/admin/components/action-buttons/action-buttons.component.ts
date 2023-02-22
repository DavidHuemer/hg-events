import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  @Output() edit: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  editClicked(): void {
    this.edit?.emit();
  }

  deleteClicked(): void {
    this.delete.emit();
  }

}
