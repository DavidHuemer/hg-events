import { Component, OnInit } from '@angular/core';
import {EquipmentsService} from "../../../core/services/equipments/equipments.service";

@Component({
  selector: 'app-equipments-page',
  templateUrl: './equipments-page.component.html',
  styleUrls: ['./equipments-page.component.scss']
})
export class EquipmentsPageComponent implements OnInit {

  constructor(private equipmentsService : EquipmentsService) {
    this.equipmentsService.getEquipments().subscribe(x => console.log(x));
  }

  ngOnInit(): void {
  }

}
