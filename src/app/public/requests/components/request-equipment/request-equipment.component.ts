import {Component, Input, OnInit} from '@angular/core';
import {RxState} from "@rx-angular/state";
import {EquipmentsService} from "../../../../core/services/equipments/equipments.service";
import {LoadingHandler, LoadingState} from "../../../../core/basics/loader/LoadingHandler";
import {Equipment} from "../../../../core/models/equipment";
import {Observable} from "rxjs";

interface RequestEquipmentState extends LoadingState<Equipment> {

}

@Component({
  selector: 'app-request-equipment',
  templateUrl: './request-equipment.component.html',
  styleUrls: ['./request-equipment.component.scss'],
  providers: [RxState]
})
export class RequestEquipmentComponent implements OnInit {

  loadingHandler: LoadingHandler<Equipment>;
  isLoading$: Observable<boolean>;
  content$: Observable<Equipment>;
  url: string = "";

  constructor(private state: RxState<RequestEquipmentState>, private equipmentsService: EquipmentsService) {
    this.loadingHandler = new LoadingHandler<Equipment>(state);
    this.isLoading$ = this.loadingHandler.getIsLoading();
    this.content$ = this.loadingHandler.getContent();

    this.content$.subscribe(equipment => {
      this.equipmentsService.getDownloadUrl(equipment.id).then(url => {
        this.url = url;
      });
    });
  }

  @Input() set equipmentId(equipmentId: string) {
    console.log('set equipment id');

    this.equipmentsService.getById(equipmentId);
    this.loadingHandler.load(this.equipmentsService.getById(equipmentId));
  }

  ngOnInit(): void {
  }

}
