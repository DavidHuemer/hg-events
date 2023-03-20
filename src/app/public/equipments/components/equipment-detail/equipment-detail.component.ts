import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from "../../../../core/models/equipment";
import {EquipmentsService} from "../../../../core/services/equipments/equipments.service";

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss']
})
export class EquipmentDetailComponent implements OnInit {
  public equipmentDetail: Equipment | undefined;
  url: string = "";

  constructor(private equipmentService: EquipmentsService) {
  }

  @Input() set equipment(e: Equipment) {
    this.equipmentDetail = e;
    this.equipmentService.getDownloadUrl(e.id).then(url => {
      this.url = url;
    })
  }

  ngOnInit(): void {
  }

}
