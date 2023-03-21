import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Equipment} from "../../../../core/models/equipment";
import {EquipmentsService} from "../../../../core/services/equipments/equipments.service";

@Component({
  selector: 'app-admin-equipment-row',
  templateUrl: './admin-equipment-row.component.html',
  styleUrls: ['./admin-equipment-row.component.scss']
})
export class AdminEquipmentRowComponent implements OnInit {
  public showingEquipment: Equipment | undefined;
  public url: string = "";
  @Output() edit: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  constructor(private equipmentsService: EquipmentsService) {
  }

  @Input() set equipment(equipment: Equipment) {
    this.showingEquipment = equipment;
    this.equipmentsService.getDownloadUrl(equipment.id).then(url => {
      this.url = url;
    });
  }

  ngOnInit(): void {
  }

  editClicked() {
    this.edit?.emit();
  }

  deleteClicked() {
    this.delete?.emit();
  }

}
