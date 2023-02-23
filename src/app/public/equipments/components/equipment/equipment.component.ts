import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from "../../../../core/models/equipment";
import {getDownloadURL, ref, Storage} from "@angular/fire/storage";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  loadedEquipment: Equipment | null = null;
  imgUrl: string = '';

  constructor(private storage: Storage) {

  }

  @Input() set equipment(e: Equipment) {
    this.loadedEquipment = e;

    const storageRef = ref(this.storage, `equipments/${this.loadedEquipment.id}`);
    getDownloadURL(storageRef).then(url => {
      this.imgUrl = url;
    });
  }

  ngOnInit(): void {
  }

}
