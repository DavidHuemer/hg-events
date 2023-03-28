import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'equipmentFile'
})
export class EquipmentFilePipe implements PipeTransform {

  transform(value: File | null, ...args: unknown[]): string {
    if (value == null) return "Originales Bild";

    return value.name;
  }

}
