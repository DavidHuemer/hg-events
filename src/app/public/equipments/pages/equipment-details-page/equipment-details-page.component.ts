import {Component, OnInit} from '@angular/core';
import {RxState} from "@rx-angular/state";
import {LoadingHandler, LoadingState} from "../../../../core/basics/loader/LoadingHandler";
import {Equipment} from "../../../../core/models/equipment";
import {EquipmentsService} from "../../../../core/services/equipments/equipments.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

interface EquipmentDetailsPageState extends LoadingState<Equipment> {

}

@Component({
  selector: 'app-equipment-details-page',
  templateUrl: './equipment-details-page.component.html',
  styleUrls: ['./equipment-details-page.component.scss'],
  providers: [RxState]
})
export class EquipmentDetailsPageComponent implements OnInit {

  loadingHandler: LoadingHandler<Equipment>;
  isLoading$: Observable<boolean>;
  content$: Observable<Equipment>

  constructor(private state: RxState<EquipmentDetailsPageState>, private equipmentsService: EquipmentsService,
              private route: ActivatedRoute) {
    this.loadingHandler = new LoadingHandler<Equipment>(state);
    this.isLoading$ = this.loadingHandler.getIsLoading();
    this.content$ = this.loadingHandler.getContent();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.loadingHandler.load(this.equipmentsService.getById(id));
  }

}
