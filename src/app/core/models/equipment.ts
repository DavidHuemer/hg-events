import {BaseEntity} from "./basics/BaseEntity";

export interface Equipment extends BaseEntity {
  name: string;
  detail: string;
}

export interface EquipmentDto {
  name: string;
  detail: string;
}
