import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {PUBLIC_GLOBAL_RX_STATE} from "../../../core/states/PublicGlobalState";
import {RxState} from "@rx-angular/state";
import {AdminGlobalState} from "../../../core/states/AdminGlobalState";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter<void>();

  title$ = this.globalState.select('pageTitle');


  constructor(@Inject(PUBLIC_GLOBAL_RX_STATE) private globalState: RxState<AdminGlobalState>) {

  }

  ngOnInit(): void {
  }

  toggleMenuClicked() {
    this.toggleMenu?.emit();
  }
}
