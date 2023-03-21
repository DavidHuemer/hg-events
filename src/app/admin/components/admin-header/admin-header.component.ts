import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {RxState} from "@rx-angular/state";
import {ADMIN_GLOBAL_RX_STATE, AdminGlobalState} from "../../../core/states/AdminGlobalState";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter<void>();

  title$ = this.globalState.select('pageTitle');


  constructor(@Inject(ADMIN_GLOBAL_RX_STATE) private globalState: RxState<AdminGlobalState>) {
    this.globalState.select('pageTitle').subscribe(pt => console.log(pt));
  }

  ngOnInit(): void {
  }

  toggleMenuClicked() {
    this.toggleMenu?.emit();
  }
}
