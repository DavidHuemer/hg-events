import {Component, Inject, OnInit} from '@angular/core';
import {BaseEditPage, EditPageState} from "../../../basics/BaseEditPage";
import {Equipment, EquipmentDto} from "../../../../core/models/equipment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RxState} from "@rx-angular/state";
import {ADMIN_GLOBAL_RX_STATE, AdminGlobalState} from "../../../../core/states/AdminGlobalState";
import {EquipmentsService} from "../../../../core/services/equipments/equipments.service";
import {ActivatedRoute} from "@angular/router";

interface EditEquipmentState extends EditPageState<Equipment> {

}

@Component({
  selector: 'app-edit-equipment-page',
  templateUrl: './edit-equipment-page.component.html',
  styleUrls: ['./edit-equipment-page.component.scss'],
  providers: [RxState]
})
export class EditEquipmentPageComponent extends BaseEditPage<Equipment, EquipmentDto> implements OnInit {
  nameFormControl: FormControl = new FormControl<string>('', [Validators.required]);
  detailFormControl: FormControl = new FormControl<string>('', [Validators.required]);

  formGroup: FormGroup;

  constructor(@Inject(ADMIN_GLOBAL_RX_STATE) globalState: RxState<AdminGlobalState>, state: RxState<EditEquipmentState>, service: EquipmentsService, route: ActivatedRoute) {
    super(globalState, state, service, route);
    this.formGroup = this.createFormGroup();
  }

  ngOnInit(): void {
    this.setup();
  }

  protected createDto(): EquipmentDto {
    return {
      name: this.nameFormControl.value,
      detail: this.detailFormControl.value
    };
  }

  protected createFormGroup(): FormGroup {
    return new FormGroup({
      nameForm: this.nameFormControl,
      detailForm: this.detailFormControl
    });
  }

  protected getTitle(): string {
    return "Equipment bearbeiten";
  }

  protected updateForms(item: Equipment): void {
    this.nameFormControl.setValue(item.name);
    this.detailFormControl.setValue(item.detail);
  }

}
