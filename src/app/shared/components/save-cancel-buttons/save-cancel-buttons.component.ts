import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-save-cancel-buttons',
  templateUrl: './save-cancel-buttons.component.html',
  styleUrls: ['./save-cancel-buttons.component.scss']
})
export class SaveCancelButtonsComponent implements OnInit {

  @Input() saveEnabled: boolean = false;

  @Output() saved: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  saveClicked() {
    this.saved?.emit();
  }

  cancelClicked() {
    this.cancelled?.emit();
  }

}
